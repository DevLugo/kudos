import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { genSalt, hash} from 'bcryptjs';
import { OrganizationCreateManyInput } from '../src/@generated/prisma-nestjs-graphql/organization/organization-create-many.input';
import { AsignedKudosStatus } from '../src/@generated/prisma-nestjs-graphql/prisma/asigned-kudos-status.enum';

const prisma = new PrismaClient();

async function main() {
    const salt = await genSalt(10);
    const password = await hash("test1234", salt);
    const amountOrganizations = 3
    const organizations: OrganizationCreateManyInput[] = [...Array(amountOrganizations)].map((_, i) => {
        return {
            id: String(i),
            name: faker.company.companyName()
        }
    });
    await prisma.organization.createMany({
        data: organizations,
    });
    console.log(faker.random.number(amountOrganizations))
    const createUsers = [...Array(100)].map((_, i) =>
        prisma.user.create({
            data:  {
                    id: String(i),
                    firstName: faker.name.findName(),
                    lastName: faker.name.lastName(),
                    email: `test${i}@test.com`,
                    password: password,
                    organization: {
                        connect:{
                            id: String(faker.random.number(amountOrganizations-1))
                        }
                    }
                }
        })
    );

    await prisma.$transaction(createUsers);

    // retrieve origanizations
    const organizationsDb = await prisma.organization.findMany();
    let transactionsKudosToAsign = []

    for(const org of organizationsDb){
        const users = await prisma.user.findMany({
            where:{
                organizationId: org.id
            }
        });

        for(const user of users){
            const fromId = user.id;
            const toList = faker.random.arrayElements(users.filter(u => u.id === fromId),3);
            const currentKudosToAsign = prisma.asignedKudo.createMany({
                data: toList.map(to => {
                    return {
                        from: fromId,
                        to: to.id,
                        status: AsignedKudosStatus.PENDING
                    }
                })
            })
            transactionsKudosToAsign = [...transactionsKudosToAsign, currentKudosToAsign]
        }
    }
    prisma.$transaction(transactionsKudosToAsign);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });