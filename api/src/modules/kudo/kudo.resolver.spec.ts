import { Test, TestingModule } from '@nestjs/testing';
import { KudoResolver } from './kudo.resolver';

describe('KudoResolver', () => {
  let resolver: KudoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KudoResolver],
    }).compile();

    resolver = module.get<KudoResolver>(KudoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
