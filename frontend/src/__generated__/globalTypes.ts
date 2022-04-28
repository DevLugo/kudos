/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AsignedKudosStatus {
  PENDING = "PENDING",
  SENT = "SENT",
}

export interface AsignedKudoCreateManyUserFromRInput {
  id?: string | null;
  status: AsignedKudosStatus;
  to: string;
}

export interface AsignedKudoCreateManyUserFromRInputEnvelope {
  data: AsignedKudoCreateManyUserFromRInput[];
  skipDuplicates?: boolean | null;
}

export interface AsignedKudoCreateManyUserToRInput {
  id?: string | null;
  status: AsignedKudosStatus;
  from: string;
}

export interface AsignedKudoCreateManyUserToRInputEnvelope {
  data: AsignedKudoCreateManyUserToRInput[];
  skipDuplicates?: boolean | null;
}

export interface AsignedKudoCreateNestedManyWithoutUserFromRInput {
  create?: AsignedKudoCreateWithoutUserFromRInput[] | null;
  connectOrCreate?: AsignedKudoCreateOrConnectWithoutUserFromRInput[] | null;
  createMany?: AsignedKudoCreateManyUserFromRInputEnvelope | null;
  connect?: AsignedKudoWhereUniqueInput[] | null;
}

export interface AsignedKudoCreateNestedManyWithoutUserToRInput {
  create?: AsignedKudoCreateWithoutUserToRInput[] | null;
  connectOrCreate?: AsignedKudoCreateOrConnectWithoutUserToRInput[] | null;
  createMany?: AsignedKudoCreateManyUserToRInputEnvelope | null;
  connect?: AsignedKudoWhereUniqueInput[] | null;
}

export interface AsignedKudoCreateOrConnectWithoutUserFromRInput {
  where: AsignedKudoWhereUniqueInput;
  create: AsignedKudoCreateWithoutUserFromRInput;
}

export interface AsignedKudoCreateOrConnectWithoutUserToRInput {
  where: AsignedKudoWhereUniqueInput;
  create: AsignedKudoCreateWithoutUserToRInput;
}

export interface AsignedKudoCreateWithoutUserFromRInput {
  id?: string | null;
  status: AsignedKudosStatus;
  userToR: UserCreateNestedOneWithoutAsignedKudosToInput;
}

export interface AsignedKudoCreateWithoutUserToRInput {
  id?: string | null;
  status: AsignedKudosStatus;
  userFromR: UserCreateNestedOneWithoutAsignedKudosFromInput;
}

export interface AsignedKudoWhereUniqueInput {
  id?: string | null;
}

export interface KudoCreateInput {
  id?: string | null;
  message: string;
  User_to: UserCreateNestedOneWithoutKudosToInput;
}

export interface KudoCreateManyUser_fromInput {
  id?: string | null;
  message: string;
  to: string;
}

export interface KudoCreateManyUser_fromInputEnvelope {
  data: KudoCreateManyUser_fromInput[];
  skipDuplicates?: boolean | null;
}

export interface KudoCreateManyUser_toInput {
  id?: string | null;
  message: string;
  from: string;
}

export interface KudoCreateManyUser_toInputEnvelope {
  data: KudoCreateManyUser_toInput[];
  skipDuplicates?: boolean | null;
}

export interface KudoCreateNestedManyWithoutUser_fromInput {
  create?: KudoCreateWithoutUser_fromInput[] | null;
  connectOrCreate?: KudoCreateOrConnectWithoutUser_fromInput[] | null;
  createMany?: KudoCreateManyUser_fromInputEnvelope | null;
  connect?: KudoWhereUniqueInput[] | null;
}

export interface KudoCreateNestedManyWithoutUser_toInput {
  create?: KudoCreateWithoutUser_toInput[] | null;
  connectOrCreate?: KudoCreateOrConnectWithoutUser_toInput[] | null;
  createMany?: KudoCreateManyUser_toInputEnvelope | null;
  connect?: KudoWhereUniqueInput[] | null;
}

export interface KudoCreateOrConnectWithoutUser_fromInput {
  where: KudoWhereUniqueInput;
  create: KudoCreateWithoutUser_fromInput;
}

export interface KudoCreateOrConnectWithoutUser_toInput {
  where: KudoWhereUniqueInput;
  create: KudoCreateWithoutUser_toInput;
}

export interface KudoCreateWithoutUser_fromInput {
  id?: string | null;
  message: string;
  User_to: UserCreateNestedOneWithoutKudosToInput;
}

export interface KudoCreateWithoutUser_toInput {
  id?: string | null;
  message: string;
  User_from: UserCreateNestedOneWithoutKudosFromInput;
}

export interface KudoWhereUniqueInput {
  id?: string | null;
}

export interface OrganizationCreateNestedOneWithoutUsersInput {
  create?: OrganizationCreateWithoutUsersInput | null;
  connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput | null;
  connect?: OrganizationWhereUniqueInput | null;
}

export interface OrganizationCreateOrConnectWithoutUsersInput {
  where: OrganizationWhereUniqueInput;
  create: OrganizationCreateWithoutUsersInput;
}

export interface OrganizationCreateWithoutUsersInput {
  id?: string | null;
}

export interface OrganizationWhereUniqueInput {
  id?: string | null;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface UserCreateInput {
  email: any;
  lastName: string;
  password: string;
  organization?: OrganizationCreateNestedOneWithoutUsersInput | null;
  KudosFrom?: KudoCreateNestedManyWithoutUser_fromInput | null;
  KudosTo?: KudoCreateNestedManyWithoutUser_toInput | null;
  AsignedKudosFrom?: AsignedKudoCreateNestedManyWithoutUserFromRInput | null;
  AsignedKudosTo?: AsignedKudoCreateNestedManyWithoutUserToRInput | null;
}

export interface UserCreateNestedOneWithoutAsignedKudosFromInput {
  create?: UserCreateWithoutAsignedKudosFromInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutAsignedKudosFromInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateNestedOneWithoutAsignedKudosToInput {
  create?: UserCreateWithoutAsignedKudosToInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutAsignedKudosToInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateNestedOneWithoutKudosFromInput {
  create?: UserCreateWithoutKudosFromInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutKudosFromInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateNestedOneWithoutKudosToInput {
  create?: UserCreateWithoutKudosToInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutKudosToInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateOrConnectWithoutAsignedKudosFromInput {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutAsignedKudosFromInput;
}

export interface UserCreateOrConnectWithoutAsignedKudosToInput {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutAsignedKudosToInput;
}

export interface UserCreateOrConnectWithoutKudosFromInput {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutKudosFromInput;
}

export interface UserCreateOrConnectWithoutKudosToInput {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutKudosToInput;
}

export interface UserCreateWithoutAsignedKudosFromInput {
  id?: string | null;
  email: any;
  lastName: string;
  password: string;
  organization?: OrganizationCreateNestedOneWithoutUsersInput | null;
  KudosFrom?: KudoCreateNestedManyWithoutUser_fromInput | null;
  KudosTo?: KudoCreateNestedManyWithoutUser_toInput | null;
  AsignedKudosTo?: AsignedKudoCreateNestedManyWithoutUserToRInput | null;
}

export interface UserCreateWithoutAsignedKudosToInput {
  id?: string | null;
  email: any;
  lastName: string;
  password: string;
  organization?: OrganizationCreateNestedOneWithoutUsersInput | null;
  KudosFrom?: KudoCreateNestedManyWithoutUser_fromInput | null;
  KudosTo?: KudoCreateNestedManyWithoutUser_toInput | null;
  AsignedKudosFrom?: AsignedKudoCreateNestedManyWithoutUserFromRInput | null;
}

export interface UserCreateWithoutKudosFromInput {
  id?: string | null;
  email: any;
  lastName: string;
  password: string;
  organization?: OrganizationCreateNestedOneWithoutUsersInput | null;
  KudosTo?: KudoCreateNestedManyWithoutUser_toInput | null;
  AsignedKudosFrom?: AsignedKudoCreateNestedManyWithoutUserFromRInput | null;
  AsignedKudosTo?: AsignedKudoCreateNestedManyWithoutUserToRInput | null;
}

export interface UserCreateWithoutKudosToInput {
  id?: string | null;
  email: any;
  lastName: string;
  password: string;
  organization?: OrganizationCreateNestedOneWithoutUsersInput | null;
  KudosFrom?: KudoCreateNestedManyWithoutUser_fromInput | null;
  AsignedKudosFrom?: AsignedKudoCreateNestedManyWithoutUserFromRInput | null;
  AsignedKudosTo?: AsignedKudoCreateNestedManyWithoutUserToRInput | null;
}

export interface UserWhereUniqueInput {
  id?: string | null;
  email?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
