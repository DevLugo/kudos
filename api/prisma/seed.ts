import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { genSalt, hash} from 'bcryptjs';
import { OrganizationCreateManyInput } from '../src/@generated/prisma-nestjs-graphql/organization/organization-create-many.input';
import { AsignedKudosStatus } from '../src/@generated/prisma-nestjs-graphql/prisma/asigned-kudos-status.enum';

const prisma = new PrismaClient();

async function main() {
    const salt = await genSalt(10);
    const password = await hash("1234", salt);
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
    
    // retrieve origanizations
    const organizationsDb = await prisma.organization.findMany();
    console.log("DB ORGANIZATIONS",organizationsDb);
    let transactionsKudosToAsign = []
/*     await Promise.all(organizationsDb.map(async org => {
 */    
    for await(const org of organizationsDb) {
        const createUsers = [...Array(100)].map((_, i) =>
            prisma.user.create({
                data:  {
                        firstName: faker.name.findName(),
                        lastName: faker.name.lastName(),
                        email: `test${String(org.id)}_${String(i)}@test.com`,
                        password: password,
                        organization: {
                            connect:{
                                id: org.id
                            }
                        }
                    }
            })
        );
        await prisma.$transaction(createUsers);

        const users = await prisma.user.findMany({
            where:{
                organizationId: org.id
            }
        });
        console.log("TOTAL USUARIOS: ",users.length)
        try {
            
        
        for await(const user of users){
            const fromId = user.id;
            const toList = faker.random.arrayElements(users.filter(u => u.id !== fromId),3);

            for (const to of toList){
                transactionsKudosToAsign.push(
                    prisma.asignedKudo.create({
                        data: {
                            from: fromId,
                            to: to.id,
                            status: AsignedKudosStatus.PENDING
                        }
                    })
                ) 
            }
        }
        await prisma.$transaction(transactionsKudosToAsign);
    } catch (error) {
            console.log(error);
    }
    /* } */
    }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });