import { api } from 'api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type Ability = {
  __typename?: 'Ability';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AbilityEntity = {
  __typename?: 'AbilityEntity';
  attributes?: Maybe<Ability>;
  id?: Maybe<Scalars['ID']>;
};

export type AbilityEntityResponse = {
  __typename?: 'AbilityEntityResponse';
  data?: Maybe<AbilityEntity>;
};

export type AbilityEntityResponseCollection = {
  __typename?: 'AbilityEntityResponseCollection';
  data: Array<AbilityEntity>;
  meta: ResponseCollectionMeta;
};

export type AbilityFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AbilityFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AbilityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AbilityFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AbilityInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AbilityRelationResponseCollection = {
  __typename?: 'AbilityRelationResponseCollection';
  data: Array<AbilityEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Character = {
  __typename?: 'Character';
  abilities?: Maybe<AbilityRelationResponseCollection>;
  age?: Maybe<Scalars['String']>;
  appearance?: Maybe<Scalars['String']>;
  armorClass?: Maybe<Scalars['Int']>;
  characteristic?: Maybe<CharacteristicEntityResponse>;
  class?: Maybe<ClassEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  equipment?: Maybe<EquipmentEntityResponse>;
  growth?: Maybe<Scalars['Float']>;
  healthPoints?: Maybe<Scalars['Int']>;
  inventory?: Maybe<InventoryEntityResponse>;
  longRest?: Maybe<Scalars['Boolean']>;
  movementSpeed?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  personality?: Maybe<PersonalityEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  race?: Maybe<RaceEntityResponse>;
  sex?: Maybe<Enum_Character_Sex>;
  shortRest?: Maybe<Scalars['Boolean']>;
  skills?: Maybe<SkillRelationResponseCollection>;
  spellSlots_1?: Maybe<Scalars['Int']>;
  spellSlots_2?: Maybe<Scalars['Int']>;
  spellSlots_3?: Maybe<Scalars['Int']>;
  spells?: Maybe<SpellRelationResponseCollection>;
  subclass?: Maybe<SubclassEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
};


export type CharacterAbilitiesArgs = {
  filters?: InputMaybe<AbilityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CharacterSkillsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CharacterSpellsArgs = {
  filters?: InputMaybe<SpellFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CharacterEntity = {
  __typename?: 'CharacterEntity';
  attributes?: Maybe<Character>;
  id?: Maybe<Scalars['ID']>;
};

export type CharacterEntityResponse = {
  __typename?: 'CharacterEntityResponse';
  data?: Maybe<CharacterEntity>;
};

export type CharacterEntityResponseCollection = {
  __typename?: 'CharacterEntityResponseCollection';
  data: Array<CharacterEntity>;
  meta: ResponseCollectionMeta;
};

export type CharacterFiltersInput = {
  abilities?: InputMaybe<AbilityFiltersInput>;
  age?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CharacterFiltersInput>>>;
  appearance?: InputMaybe<StringFilterInput>;
  armorClass?: InputMaybe<IntFilterInput>;
  characteristic?: InputMaybe<CharacteristicFiltersInput>;
  class?: InputMaybe<ClassFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  equipment?: InputMaybe<EquipmentFiltersInput>;
  growth?: InputMaybe<FloatFilterInput>;
  healthPoints?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  inventory?: InputMaybe<InventoryFiltersInput>;
  longRest?: InputMaybe<BooleanFilterInput>;
  movementSpeed?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CharacterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CharacterFiltersInput>>>;
  personality?: InputMaybe<PersonalityFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  race?: InputMaybe<RaceFiltersInput>;
  sex?: InputMaybe<StringFilterInput>;
  shortRest?: InputMaybe<BooleanFilterInput>;
  skills?: InputMaybe<SkillFiltersInput>;
  spellSlots_1?: InputMaybe<IntFilterInput>;
  spellSlots_2?: InputMaybe<IntFilterInput>;
  spellSlots_3?: InputMaybe<IntFilterInput>;
  spells?: InputMaybe<SpellFiltersInput>;
  subclass?: InputMaybe<SubclassFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  weight?: InputMaybe<FloatFilterInput>;
};

export type CharacterInput = {
  abilities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  age?: InputMaybe<Scalars['String']>;
  appearance?: InputMaybe<Scalars['String']>;
  armorClass?: InputMaybe<Scalars['Int']>;
  characteristic?: InputMaybe<Scalars['ID']>;
  class?: InputMaybe<Scalars['ID']>;
  equipment?: InputMaybe<Scalars['ID']>;
  growth?: InputMaybe<Scalars['Float']>;
  healthPoints?: InputMaybe<Scalars['Int']>;
  inventory?: InputMaybe<Scalars['ID']>;
  longRest?: InputMaybe<Scalars['Boolean']>;
  movementSpeed?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  personality?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  race?: InputMaybe<Scalars['ID']>;
  sex?: InputMaybe<Enum_Character_Sex>;
  shortRest?: InputMaybe<Scalars['Boolean']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  spellSlots_1?: InputMaybe<Scalars['Int']>;
  spellSlots_2?: InputMaybe<Scalars['Int']>;
  spellSlots_3?: InputMaybe<Scalars['Int']>;
  spells?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  subclass?: InputMaybe<Scalars['ID']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type Characteristic = {
  __typename?: 'Characteristic';
  charisma?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dexterity?: Maybe<Scalars['Int']>;
  intelligence?: Maybe<Scalars['Int']>;
  physique?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  strength?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  wisdom?: Maybe<Scalars['Int']>;
};

export type CharacteristicEntity = {
  __typename?: 'CharacteristicEntity';
  attributes?: Maybe<Characteristic>;
  id?: Maybe<Scalars['ID']>;
};

export type CharacteristicEntityResponse = {
  __typename?: 'CharacteristicEntityResponse';
  data?: Maybe<CharacteristicEntity>;
};

export type CharacteristicEntityResponseCollection = {
  __typename?: 'CharacteristicEntityResponseCollection';
  data: Array<CharacteristicEntity>;
  meta: ResponseCollectionMeta;
};

export type CharacteristicFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CharacteristicFiltersInput>>>;
  charisma?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dexterity?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  intelligence?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<CharacteristicFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CharacteristicFiltersInput>>>;
  physique?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  strength?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  wisdom?: InputMaybe<IntFilterInput>;
};

export type CharacteristicInput = {
  charisma?: InputMaybe<Scalars['Int']>;
  dexterity?: InputMaybe<Scalars['Int']>;
  intelligence?: InputMaybe<Scalars['Int']>;
  physique?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  strength?: InputMaybe<Scalars['Int']>;
  wisdom?: InputMaybe<Scalars['Int']>;
};

export type Class = {
  __typename?: 'Class';
  abilities?: Maybe<AbilityRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  numberOfSkills?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  skills?: Maybe<SkillRelationResponseCollection>;
  spellSlots_1?: Maybe<Scalars['Int']>;
  spellSlots_2?: Maybe<Scalars['Int']>;
  spellSlots_3?: Maybe<Scalars['Int']>;
  spells?: Maybe<SpellRelationResponseCollection>;
  subclasses?: Maybe<SubclassRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ClassAbilitiesArgs = {
  filters?: InputMaybe<AbilityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ClassSkillsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ClassSpellsArgs = {
  filters?: InputMaybe<SpellFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ClassSubclassesArgs = {
  filters?: InputMaybe<SubclassFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ClassEntity = {
  __typename?: 'ClassEntity';
  attributes?: Maybe<Class>;
  id?: Maybe<Scalars['ID']>;
};

export type ClassEntityResponse = {
  __typename?: 'ClassEntityResponse';
  data?: Maybe<ClassEntity>;
};

export type ClassEntityResponseCollection = {
  __typename?: 'ClassEntityResponseCollection';
  data: Array<ClassEntity>;
  meta: ResponseCollectionMeta;
};

export type ClassFiltersInput = {
  abilities?: InputMaybe<AbilityFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ClassFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ClassFiltersInput>;
  numberOfSkills?: InputMaybe<IntFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ClassFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  skills?: InputMaybe<SkillFiltersInput>;
  spellSlots_1?: InputMaybe<IntFilterInput>;
  spellSlots_2?: InputMaybe<IntFilterInput>;
  spellSlots_3?: InputMaybe<IntFilterInput>;
  spells?: InputMaybe<SpellFiltersInput>;
  subclasses?: InputMaybe<SubclassFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ClassInput = {
  abilities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  numberOfSkills?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  spellSlots_1?: InputMaybe<Scalars['Int']>;
  spellSlots_2?: InputMaybe<Scalars['Int']>;
  spellSlots_3?: InputMaybe<Scalars['Int']>;
  spells?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  subclasses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Character_Sex {
  Man = 'man',
  Woman = 'woman'
}

export type Equipment = {
  __typename?: 'Equipment';
  belt?: Maybe<ItemEntityResponse>;
  body?: Maybe<ItemEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  head?: Maybe<ItemEntityResponse>;
  kneePads?: Maybe<ItemEntityResponse>;
  leftFoot?: Maybe<ItemEntityResponse>;
  leftHand?: Maybe<ItemRelationResponseCollection>;
  legs?: Maybe<ItemEntityResponse>;
  neck?: Maybe<ItemEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  rightFoot?: Maybe<ItemEntityResponse>;
  rightHand?: Maybe<ItemRelationResponseCollection>;
  shoulders?: Maybe<ItemEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EquipmentLeftHandArgs = {
  filters?: InputMaybe<ItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EquipmentRightHandArgs = {
  filters?: InputMaybe<ItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EquipmentEntity = {
  __typename?: 'EquipmentEntity';
  attributes?: Maybe<Equipment>;
  id?: Maybe<Scalars['ID']>;
};

export type EquipmentEntityResponse = {
  __typename?: 'EquipmentEntityResponse';
  data?: Maybe<EquipmentEntity>;
};

export type EquipmentEntityResponseCollection = {
  __typename?: 'EquipmentEntityResponseCollection';
  data: Array<EquipmentEntity>;
  meta: ResponseCollectionMeta;
};

export type EquipmentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EquipmentFiltersInput>>>;
  belt?: InputMaybe<ItemFiltersInput>;
  body?: InputMaybe<ItemFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  head?: InputMaybe<ItemFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  kneePads?: InputMaybe<ItemFiltersInput>;
  leftFoot?: InputMaybe<ItemFiltersInput>;
  leftHand?: InputMaybe<ItemFiltersInput>;
  legs?: InputMaybe<ItemFiltersInput>;
  neck?: InputMaybe<ItemFiltersInput>;
  not?: InputMaybe<EquipmentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EquipmentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rightFoot?: InputMaybe<ItemFiltersInput>;
  rightHand?: InputMaybe<ItemFiltersInput>;
  shoulders?: InputMaybe<ItemFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EquipmentInput = {
  belt?: InputMaybe<Scalars['ID']>;
  body?: InputMaybe<Scalars['ID']>;
  head?: InputMaybe<Scalars['ID']>;
  kneePads?: InputMaybe<Scalars['ID']>;
  leftFoot?: InputMaybe<Scalars['ID']>;
  leftHand?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  legs?: InputMaybe<Scalars['ID']>;
  neck?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  rightFoot?: InputMaybe<Scalars['ID']>;
  rightHand?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  shoulders?: InputMaybe<Scalars['ID']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Ability | Character | Characteristic | Class | Equipment | I18NLocale | Inventory | Item | ItemType | Personality | Race | Skill | Spell | Subclass | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type Inventory = {
  __typename?: 'Inventory';
  capacity?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<ItemRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type InventoryItemsArgs = {
  filters?: InputMaybe<ItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type InventoryEntity = {
  __typename?: 'InventoryEntity';
  attributes?: Maybe<Inventory>;
  id?: Maybe<Scalars['ID']>;
};

export type InventoryEntityResponse = {
  __typename?: 'InventoryEntityResponse';
  data?: Maybe<InventoryEntity>;
};

export type InventoryEntityResponseCollection = {
  __typename?: 'InventoryEntityResponseCollection';
  data: Array<InventoryEntity>;
  meta: ResponseCollectionMeta;
};

export type InventoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<InventoryFiltersInput>>>;
  capacity?: InputMaybe<FloatFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ItemFiltersInput>;
  not?: InputMaybe<InventoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InventoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InventoryInput = {
  capacity?: InputMaybe<Scalars['Float']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Item = {
  __typename?: 'Item';
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  size?: Maybe<Scalars['Float']>;
  type?: Maybe<ItemTypeEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
};

export type ItemEntity = {
  __typename?: 'ItemEntity';
  attributes?: Maybe<Item>;
  id?: Maybe<Scalars['ID']>;
};

export type ItemEntityResponse = {
  __typename?: 'ItemEntityResponse';
  data?: Maybe<ItemEntity>;
};

export type ItemEntityResponseCollection = {
  __typename?: 'ItemEntityResponseCollection';
  data: Array<ItemEntity>;
  meta: ResponseCollectionMeta;
};

export type ItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ItemFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  type?: InputMaybe<ItemTypeFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  weight?: InputMaybe<FloatFilterInput>;
};

export type ItemInput = {
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  size?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['ID']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type ItemRelationResponseCollection = {
  __typename?: 'ItemRelationResponseCollection';
  data: Array<ItemEntity>;
};

export type ItemType = {
  __typename?: 'ItemType';
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ItemTypeEntity = {
  __typename?: 'ItemTypeEntity';
  attributes?: Maybe<ItemType>;
  id?: Maybe<Scalars['ID']>;
};

export type ItemTypeEntityResponse = {
  __typename?: 'ItemTypeEntityResponse';
  data?: Maybe<ItemTypeEntity>;
};

export type ItemTypeEntityResponseCollection = {
  __typename?: 'ItemTypeEntityResponseCollection';
  data: Array<ItemTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type ItemTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ItemTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ItemTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ItemTypeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ItemTypeInput = {
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAbility?: Maybe<AbilityEntityResponse>;
  createCharacter?: Maybe<CharacterEntityResponse>;
  createCharacteristic?: Maybe<CharacteristicEntityResponse>;
  createClass?: Maybe<ClassEntityResponse>;
  createEquipment?: Maybe<EquipmentEntityResponse>;
  createInventory?: Maybe<InventoryEntityResponse>;
  createItem?: Maybe<ItemEntityResponse>;
  createItemType?: Maybe<ItemTypeEntityResponse>;
  createPersonality?: Maybe<PersonalityEntityResponse>;
  createRace?: Maybe<RaceEntityResponse>;
  createSkill?: Maybe<SkillEntityResponse>;
  createSpell?: Maybe<SpellEntityResponse>;
  createSubclass?: Maybe<SubclassEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbility?: Maybe<AbilityEntityResponse>;
  deleteCharacter?: Maybe<CharacterEntityResponse>;
  deleteCharacteristic?: Maybe<CharacteristicEntityResponse>;
  deleteClass?: Maybe<ClassEntityResponse>;
  deleteEquipment?: Maybe<EquipmentEntityResponse>;
  deleteInventory?: Maybe<InventoryEntityResponse>;
  deleteItem?: Maybe<ItemEntityResponse>;
  deleteItemType?: Maybe<ItemTypeEntityResponse>;
  deletePersonality?: Maybe<PersonalityEntityResponse>;
  deleteRace?: Maybe<RaceEntityResponse>;
  deleteSkill?: Maybe<SkillEntityResponse>;
  deleteSpell?: Maybe<SpellEntityResponse>;
  deleteSubclass?: Maybe<SubclassEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbility?: Maybe<AbilityEntityResponse>;
  updateCharacter?: Maybe<CharacterEntityResponse>;
  updateCharacteristic?: Maybe<CharacteristicEntityResponse>;
  updateClass?: Maybe<ClassEntityResponse>;
  updateEquipment?: Maybe<EquipmentEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateInventory?: Maybe<InventoryEntityResponse>;
  updateItem?: Maybe<ItemEntityResponse>;
  updateItemType?: Maybe<ItemTypeEntityResponse>;
  updatePersonality?: Maybe<PersonalityEntityResponse>;
  updateRace?: Maybe<RaceEntityResponse>;
  updateSkill?: Maybe<SkillEntityResponse>;
  updateSpell?: Maybe<SpellEntityResponse>;
  updateSubclass?: Maybe<SubclassEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateAbilityArgs = {
  data: AbilityInput;
};


export type MutationCreateCharacterArgs = {
  data: CharacterInput;
};


export type MutationCreateCharacteristicArgs = {
  data: CharacteristicInput;
};


export type MutationCreateClassArgs = {
  data: ClassInput;
};


export type MutationCreateEquipmentArgs = {
  data: EquipmentInput;
};


export type MutationCreateInventoryArgs = {
  data: InventoryInput;
};


export type MutationCreateItemArgs = {
  data: ItemInput;
};


export type MutationCreateItemTypeArgs = {
  data: ItemTypeInput;
};


export type MutationCreatePersonalityArgs = {
  data: PersonalityInput;
};


export type MutationCreateRaceArgs = {
  data: RaceInput;
};


export type MutationCreateSkillArgs = {
  data: SkillInput;
};


export type MutationCreateSpellArgs = {
  data: SpellInput;
};


export type MutationCreateSubclassArgs = {
  data: SubclassInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAbilityArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCharacterArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCharacteristicArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteClassArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEquipmentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteInventoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePersonalityArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRaceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSkillArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSpellArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSubclassArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAbilityArgs = {
  data: AbilityInput;
  id: Scalars['ID'];
};


export type MutationUpdateCharacterArgs = {
  data: CharacterInput;
  id: Scalars['ID'];
};


export type MutationUpdateCharacteristicArgs = {
  data: CharacteristicInput;
  id: Scalars['ID'];
};


export type MutationUpdateClassArgs = {
  data: ClassInput;
  id: Scalars['ID'];
};


export type MutationUpdateEquipmentArgs = {
  data: EquipmentInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateInventoryArgs = {
  data: InventoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateItemArgs = {
  data: ItemInput;
  id: Scalars['ID'];
};


export type MutationUpdateItemTypeArgs = {
  data: ItemTypeInput;
  id: Scalars['ID'];
};


export type MutationUpdatePersonalityArgs = {
  data: PersonalityInput;
  id: Scalars['ID'];
};


export type MutationUpdateRaceArgs = {
  data: RaceInput;
  id: Scalars['ID'];
};


export type MutationUpdateSkillArgs = {
  data: SkillInput;
  id: Scalars['ID'];
};


export type MutationUpdateSpellArgs = {
  data: SpellInput;
  id: Scalars['ID'];
};


export type MutationUpdateSubclassArgs = {
  data: SubclassInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Personality = {
  __typename?: 'Personality';
  biography?: Maybe<Scalars['String']>;
  bonds?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flaw?: Maybe<Scalars['String']>;
  ideal?: Maybe<Scalars['String']>;
  outlook?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  skills?: Maybe<SkillRelationResponseCollection>;
  traits?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PersonalitySkillsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PersonalityEntity = {
  __typename?: 'PersonalityEntity';
  attributes?: Maybe<Personality>;
  id?: Maybe<Scalars['ID']>;
};

export type PersonalityEntityResponse = {
  __typename?: 'PersonalityEntityResponse';
  data?: Maybe<PersonalityEntity>;
};

export type PersonalityEntityResponseCollection = {
  __typename?: 'PersonalityEntityResponseCollection';
  data: Array<PersonalityEntity>;
  meta: ResponseCollectionMeta;
};

export type PersonalityFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PersonalityFiltersInput>>>;
  biography?: InputMaybe<StringFilterInput>;
  bonds?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  flaw?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  ideal?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PersonalityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PersonalityFiltersInput>>>;
  outlook?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  skills?: InputMaybe<SkillFiltersInput>;
  traits?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PersonalityInput = {
  biography?: InputMaybe<Scalars['String']>;
  bonds?: InputMaybe<Scalars['String']>;
  flaw?: InputMaybe<Scalars['String']>;
  ideal?: InputMaybe<Scalars['String']>;
  outlook?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  traits?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  abilities?: Maybe<AbilityEntityResponseCollection>;
  ability?: Maybe<AbilityEntityResponse>;
  character?: Maybe<CharacterEntityResponse>;
  characteristic?: Maybe<CharacteristicEntityResponse>;
  characteristics?: Maybe<CharacteristicEntityResponseCollection>;
  characters?: Maybe<CharacterEntityResponseCollection>;
  class?: Maybe<ClassEntityResponse>;
  classes?: Maybe<ClassEntityResponseCollection>;
  equipment?: Maybe<EquipmentEntityResponse>;
  equipments?: Maybe<EquipmentEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  inventories?: Maybe<InventoryEntityResponseCollection>;
  inventory?: Maybe<InventoryEntityResponse>;
  item?: Maybe<ItemEntityResponse>;
  itemType?: Maybe<ItemTypeEntityResponse>;
  itemTypes?: Maybe<ItemTypeEntityResponseCollection>;
  items?: Maybe<ItemEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  personalities?: Maybe<PersonalityEntityResponseCollection>;
  personality?: Maybe<PersonalityEntityResponse>;
  race?: Maybe<RaceEntityResponse>;
  races?: Maybe<RaceEntityResponseCollection>;
  skill?: Maybe<SkillEntityResponse>;
  skills?: Maybe<SkillEntityResponseCollection>;
  spell?: Maybe<SpellEntityResponse>;
  spells?: Maybe<SpellEntityResponseCollection>;
  subclass?: Maybe<SubclassEntityResponse>;
  subclasses?: Maybe<SubclassEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAbilitiesArgs = {
  filters?: InputMaybe<AbilityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAbilityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCharacterArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCharacteristicArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCharacteristicsArgs = {
  filters?: InputMaybe<CharacteristicFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCharactersArgs = {
  filters?: InputMaybe<CharacterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryClassArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryClassesArgs = {
  filters?: InputMaybe<ClassFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEquipmentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEquipmentsArgs = {
  filters?: InputMaybe<EquipmentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryInventoriesArgs = {
  filters?: InputMaybe<InventoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryInventoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryItemTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryItemTypesArgs = {
  filters?: InputMaybe<ItemTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryItemsArgs = {
  filters?: InputMaybe<ItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPersonalitiesArgs = {
  filters?: InputMaybe<PersonalityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPersonalityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRaceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRacesArgs = {
  filters?: InputMaybe<RaceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySkillArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySkillsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySpellArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySpellsArgs = {
  filters?: InputMaybe<SpellFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySubclassArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySubclassesArgs = {
  filters?: InputMaybe<SubclassFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Race = {
  __typename?: 'Race';
  charisma?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dexterity?: Maybe<Scalars['Int']>;
  intelligence?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  physique?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  strength?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  wisdom?: Maybe<Scalars['Int']>;
};

export type RaceEntity = {
  __typename?: 'RaceEntity';
  attributes?: Maybe<Race>;
  id?: Maybe<Scalars['ID']>;
};

export type RaceEntityResponse = {
  __typename?: 'RaceEntityResponse';
  data?: Maybe<RaceEntity>;
};

export type RaceEntityResponseCollection = {
  __typename?: 'RaceEntityResponseCollection';
  data: Array<RaceEntity>;
  meta: ResponseCollectionMeta;
};

export type RaceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RaceFiltersInput>>>;
  charisma?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dexterity?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  intelligence?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RaceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RaceFiltersInput>>>;
  physique?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  strength?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  wisdom?: InputMaybe<IntFilterInput>;
};

export type RaceInput = {
  charisma?: InputMaybe<Scalars['Int']>;
  dexterity?: InputMaybe<Scalars['Int']>;
  intelligence?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  physique?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  strength?: InputMaybe<Scalars['Int']>;
  wisdom?: InputMaybe<Scalars['Int']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Skill = {
  __typename?: 'Skill';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SkillEntity = {
  __typename?: 'SkillEntity';
  attributes?: Maybe<Skill>;
  id?: Maybe<Scalars['ID']>;
};

export type SkillEntityResponse = {
  __typename?: 'SkillEntityResponse';
  data?: Maybe<SkillEntity>;
};

export type SkillEntityResponseCollection = {
  __typename?: 'SkillEntityResponseCollection';
  data: Array<SkillEntity>;
  meta: ResponseCollectionMeta;
};

export type SkillFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SkillFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SkillInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SkillRelationResponseCollection = {
  __typename?: 'SkillRelationResponseCollection';
  data: Array<SkillEntity>;
};

export type Spell = {
  __typename?: 'Spell';
  createdAt?: Maybe<Scalars['DateTime']>;
  executionConditions?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  school?: Maybe<Scalars['String']>;
  spellCircle?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpellEntity = {
  __typename?: 'SpellEntity';
  attributes?: Maybe<Spell>;
  id?: Maybe<Scalars['ID']>;
};

export type SpellEntityResponse = {
  __typename?: 'SpellEntityResponse';
  data?: Maybe<SpellEntity>;
};

export type SpellEntityResponseCollection = {
  __typename?: 'SpellEntityResponseCollection';
  data: Array<SpellEntity>;
  meta: ResponseCollectionMeta;
};

export type SpellFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SpellFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  executionConditions?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SpellFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SpellFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  school?: InputMaybe<StringFilterInput>;
  spellCircle?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SpellInput = {
  executionConditions?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  school?: InputMaybe<Scalars['String']>;
  spellCircle?: InputMaybe<Scalars['Int']>;
};

export type SpellRelationResponseCollection = {
  __typename?: 'SpellRelationResponseCollection';
  data: Array<SpellEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subclass = {
  __typename?: 'Subclass';
  abilities?: Maybe<AbilityRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dominanceBone?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  skills?: Maybe<SkillRelationResponseCollection>;
  spellSlots_1?: Maybe<Scalars['Int']>;
  spellSlots_2?: Maybe<Scalars['Int']>;
  spellSlots_3?: Maybe<Scalars['Int']>;
  spells?: Maybe<SpellRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SubclassAbilitiesArgs = {
  filters?: InputMaybe<AbilityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SubclassSkillsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SubclassSpellsArgs = {
  filters?: InputMaybe<SpellFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SubclassEntity = {
  __typename?: 'SubclassEntity';
  attributes?: Maybe<Subclass>;
  id?: Maybe<Scalars['ID']>;
};

export type SubclassEntityResponse = {
  __typename?: 'SubclassEntityResponse';
  data?: Maybe<SubclassEntity>;
};

export type SubclassEntityResponseCollection = {
  __typename?: 'SubclassEntityResponseCollection';
  data: Array<SubclassEntity>;
  meta: ResponseCollectionMeta;
};

export type SubclassFiltersInput = {
  abilities?: InputMaybe<AbilityFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<SubclassFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dominanceBone?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SubclassFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SubclassFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  skills?: InputMaybe<SkillFiltersInput>;
  spellSlots_1?: InputMaybe<IntFilterInput>;
  spellSlots_2?: InputMaybe<IntFilterInput>;
  spellSlots_3?: InputMaybe<IntFilterInput>;
  spells?: InputMaybe<SpellFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SubclassInput = {
  abilities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  dominanceBone?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  spellSlots_1?: InputMaybe<Scalars['Int']>;
  spellSlots_2?: InputMaybe<Scalars['Int']>;
  spellSlots_3?: InputMaybe<Scalars['Int']>;
  spells?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type SubclassRelationResponseCollection = {
  __typename?: 'SubclassRelationResponseCollection';
  data: Array<SubclassEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type LoginMutationVariables = Exact<{
  data: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null } } };

export type GetCharacterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCharacterQuery = { __typename?: 'Query', characters?: { __typename?: 'CharacterEntityResponseCollection', data: Array<{ __typename?: 'CharacterEntity', attributes?: { __typename?: 'Character', equipment?: { __typename?: 'EquipmentEntityResponse', data?: { __typename?: 'EquipmentEntity', id?: string | null, attributes?: { __typename?: 'Equipment', head?: { __typename?: 'ItemEntityResponse', data?: { __typename?: 'ItemEntity', id?: string | null, attributes?: { __typename?: 'Item', name?: string | null } | null } | null } | null } | null } | null } | null } | null }> } | null };

export type SignupMutationVariables = Exact<{
  data: UsersPermissionsRegisterInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', register: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null } } };


export const LoginDocument = `
    mutation login($data: UsersPermissionsLoginInput!) {
  login(input: $data) {
    jwt
    user {
      id
      username
      email
      confirmed
      blocked
    }
  }
}
    `;
export const GetCharacterDocument = `
    query GetCharacter {
  characters {
    data {
      attributes {
        equipment {
          data {
            id
            attributes {
              head {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const SignupDocument = `
    mutation signup($data: UsersPermissionsRegisterInput!) {
  register(input: $data) {
    jwt
    user {
      id
      username
      email
      confirmed
      blocked
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables })
    }),
    GetCharacter: build.query<GetCharacterQuery, GetCharacterQueryVariables | void>({
      query: (variables) => ({ document: GetCharacterDocument, variables })
    }),
    signup: build.mutation<SignupMutation, SignupMutationVariables>({
      query: (variables) => ({ document: SignupDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useLoginMutation, useGetCharacterQuery, useLazyGetCharacterQuery, useSignupMutation } = injectedRtkApi;

