import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
};

export type Author = Document & {
  __typename?: 'Author';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  bioRaw?: Maybe<Scalars['JSON']>;
  image?: Maybe<Image>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
};

export type AuthorFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  image?: InputMaybe<ImageFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type AuthorSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type BlockOrImage = Block | Image;

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type Category = Document & {
  __typename?: 'Category';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type CrossDatasetReference = {
  __typename?: 'CrossDatasetReference';
  _dataset?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _projectId?: Maybe<Scalars['String']>;
  _ref?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _weak?: Maybe<Scalars['Boolean']>;
};

export type CrossDatasetReferenceFilter = {
  _dataset?: InputMaybe<StringFilter>;
  _key?: InputMaybe<StringFilter>;
  _projectId?: InputMaybe<StringFilter>;
  _ref?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _weak?: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
  _dataset?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _projectId?: InputMaybe<SortOrder>;
  _ref?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _weak?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']>;
};

export type Post = Document & {
  __typename?: 'Post';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Author>;
  bodyRaw?: Maybe<Scalars['JSON']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  mainImage?: Maybe<Image>;
  preview?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
};

export type PostFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  author?: InputMaybe<AuthorFilter>;
  mainImage?: InputMaybe<ImageFilter>;
  preview?: InputMaybe<StringFilter>;
  publishedAt?: InputMaybe<DatetimeFilter>;
  seoDescription?: InputMaybe<StringFilter>;
  seoTitle?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<ImageSorting>;
  preview?: InputMaybe<SortOrder>;
  publishedAt?: InputMaybe<SortOrder>;
  seoDescription?: InputMaybe<SortOrder>;
  seoTitle?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  Author?: Maybe<Author>;
  Category?: Maybe<Category>;
  Document?: Maybe<Document>;
  Post?: Maybe<Post>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  allAuthor: Array<Author>;
  allCategory: Array<Category>;
  allDocument: Array<Document>;
  allPost: Array<Post>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
};


export type RootQueryAuthorArgs = {
  id: Scalars['ID'];
};


export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type RootQueryPostArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type RootQueryAllAuthorArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AuthorSorting>>;
  where?: InputMaybe<AuthorFilter>;
};


export type RootQueryAllCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CategorySorting>>;
  where?: InputMaybe<CategoryFilter>;
};


export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};


export type RootQueryAllPostArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PostSorting>>;
  where?: InputMaybe<PostFilter>;
};


export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};


export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars['String']>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
  source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<Scalars['String']>>;
};

export type BlogPostFragment = { __typename?: 'Post', title?: string | null, publishedAt?: any | null, bodyRaw?: any | null, seoTitle?: string | null, seoDescription?: string | null, preview?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null, categories?: Array<{ __typename?: 'Category', description?: string | null, title?: string | null } | null> | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null, altText?: string | null, label?: string | null } | null } | null, author?: { __typename?: 'Author', name?: string | null, bioRaw?: any | null, image?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null, altText?: string | null, label?: string | null } | null } | null } | null };

export type BlogPostListFragment = { __typename?: 'Post', title?: string | null, publishedAt?: any | null, preview?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null, categories?: Array<{ __typename?: 'Category', description?: string | null, title?: string | null } | null> | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null, altText?: string | null, label?: string | null } | null } | null, author?: { __typename?: 'Author', name?: string | null, bioRaw?: any | null, image?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null, altText?: string | null, label?: string | null } | null } | null } | null };

export type GetBlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogPostsQuery = { __typename?: 'RootQuery', allPost: Array<{ __typename?: 'Post', title?: string | null, publishedAt?: any | null, preview?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null, categories?: Array<{ __typename?: 'Category', description?: string | null, title?: string | null } | null> | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null, altText?: string | null, label?: string | null } | null } | null, author?: { __typename?: 'Author', name?: string | null, bioRaw?: any | null, image?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null, altText?: string | null, label?: string | null } | null } | null } | null }> };

export type GetBlogPostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetBlogPostQuery = { __typename?: 'RootQuery', allPost: Array<{ __typename?: 'Post', title?: string | null, publishedAt?: any | null, bodyRaw?: any | null, seoTitle?: string | null, seoDescription?: string | null, preview?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null, categories?: Array<{ __typename?: 'Category', description?: string | null, title?: string | null } | null> | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null, altText?: string | null, label?: string | null } | null } | null, author?: { __typename?: 'Author', name?: string | null, bioRaw?: any | null, image?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null, altText?: string | null, label?: string | null } | null } | null } | null }> };

export type GetHomePageDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageDataQuery = { __typename?: 'RootQuery', allPost: Array<{ __typename?: 'Post', title?: string | null, publishedAt?: any | null, preview?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null, categories?: Array<{ __typename?: 'Category', description?: string | null, title?: string | null } | null> | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null, altText?: string | null, label?: string | null } | null } | null, author?: { __typename?: 'Author', name?: string | null, bioRaw?: any | null, image?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null, altText?: string | null, label?: string | null } | null } | null } | null }> };

export type CategoryItemFragment = { __typename?: 'Category', title?: string | null, description?: string | null };

export type GetNavDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNavDataQuery = { __typename?: 'RootQuery', allCategory: Array<{ __typename?: 'Category', title?: string | null, description?: string | null }> };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<Author>;
  AuthorFilter: AuthorFilter;
  AuthorSorting: AuthorSorting;
  Block: ResolverTypeWrapper<Block>;
  BlockOrImage: ResolversTypes['Block'] | ResolversTypes['Image'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BooleanFilter: BooleanFilter;
  Category: ResolverTypeWrapper<Category>;
  CategoryFilter: CategoryFilter;
  CategorySorting: CategorySorting;
  CrossDatasetReference: ResolverTypeWrapper<CrossDatasetReference>;
  CrossDatasetReferenceFilter: CrossDatasetReferenceFilter;
  CrossDatasetReferenceSorting: CrossDatasetReferenceSorting;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateFilter: DateFilter;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DatetimeFilter: DatetimeFilter;
  Document: ResolversTypes['Author'] | ResolversTypes['Category'] | ResolversTypes['Post'] | ResolversTypes['SanityFileAsset'] | ResolversTypes['SanityImageAsset'];
  DocumentFilter: DocumentFilter;
  DocumentSorting: DocumentSorting;
  File: ResolverTypeWrapper<File>;
  FileFilter: FileFilter;
  FileSorting: FileSorting;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FloatFilter: FloatFilter;
  Geopoint: ResolverTypeWrapper<Geopoint>;
  GeopointFilter: GeopointFilter;
  GeopointSorting: GeopointSorting;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDFilter: IdFilter;
  Image: ResolverTypeWrapper<Image>;
  ImageFilter: ImageFilter;
  ImageSorting: ImageSorting;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFilter: IntFilter;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Post: ResolverTypeWrapper<Post>;
  PostFilter: PostFilter;
  PostSorting: PostSorting;
  RootQuery: ResolverTypeWrapper<{}>;
  SanityAssetSourceData: ResolverTypeWrapper<SanityAssetSourceData>;
  SanityAssetSourceDataFilter: SanityAssetSourceDataFilter;
  SanityAssetSourceDataSorting: SanityAssetSourceDataSorting;
  SanityFileAsset: ResolverTypeWrapper<SanityFileAsset>;
  SanityFileAssetFilter: SanityFileAssetFilter;
  SanityFileAssetSorting: SanityFileAssetSorting;
  SanityImageAsset: ResolverTypeWrapper<SanityImageAsset>;
  SanityImageAssetFilter: SanityImageAssetFilter;
  SanityImageAssetSorting: SanityImageAssetSorting;
  SanityImageCrop: ResolverTypeWrapper<SanityImageCrop>;
  SanityImageCropFilter: SanityImageCropFilter;
  SanityImageCropSorting: SanityImageCropSorting;
  SanityImageDimensions: ResolverTypeWrapper<SanityImageDimensions>;
  SanityImageDimensionsFilter: SanityImageDimensionsFilter;
  SanityImageDimensionsSorting: SanityImageDimensionsSorting;
  SanityImageHotspot: ResolverTypeWrapper<SanityImageHotspot>;
  SanityImageHotspotFilter: SanityImageHotspotFilter;
  SanityImageHotspotSorting: SanityImageHotspotSorting;
  SanityImageMetadata: ResolverTypeWrapper<SanityImageMetadata>;
  SanityImageMetadataFilter: SanityImageMetadataFilter;
  SanityImageMetadataSorting: SanityImageMetadataSorting;
  SanityImagePalette: ResolverTypeWrapper<SanityImagePalette>;
  SanityImagePaletteFilter: SanityImagePaletteFilter;
  SanityImagePaletteSorting: SanityImagePaletteSorting;
  SanityImagePaletteSwatch: ResolverTypeWrapper<SanityImagePaletteSwatch>;
  SanityImagePaletteSwatchFilter: SanityImagePaletteSwatchFilter;
  SanityImagePaletteSwatchSorting: SanityImagePaletteSwatchSorting;
  Sanity_DocumentFilter: Sanity_DocumentFilter;
  Slug: ResolverTypeWrapper<Slug>;
  SlugFilter: SlugFilter;
  SlugSorting: SlugSorting;
  SortOrder: SortOrder;
  Span: ResolverTypeWrapper<Span>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFilter: StringFilter;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Author;
  AuthorFilter: AuthorFilter;
  AuthorSorting: AuthorSorting;
  Block: Block;
  BlockOrImage: ResolversParentTypes['Block'] | ResolversParentTypes['Image'];
  Boolean: Scalars['Boolean'];
  BooleanFilter: BooleanFilter;
  Category: Category;
  CategoryFilter: CategoryFilter;
  CategorySorting: CategorySorting;
  CrossDatasetReference: CrossDatasetReference;
  CrossDatasetReferenceFilter: CrossDatasetReferenceFilter;
  CrossDatasetReferenceSorting: CrossDatasetReferenceSorting;
  Date: Scalars['Date'];
  DateFilter: DateFilter;
  DateTime: Scalars['DateTime'];
  DatetimeFilter: DatetimeFilter;
  Document: ResolversParentTypes['Author'] | ResolversParentTypes['Category'] | ResolversParentTypes['Post'] | ResolversParentTypes['SanityFileAsset'] | ResolversParentTypes['SanityImageAsset'];
  DocumentFilter: DocumentFilter;
  DocumentSorting: DocumentSorting;
  File: File;
  FileFilter: FileFilter;
  FileSorting: FileSorting;
  Float: Scalars['Float'];
  FloatFilter: FloatFilter;
  Geopoint: Geopoint;
  GeopointFilter: GeopointFilter;
  GeopointSorting: GeopointSorting;
  ID: Scalars['ID'];
  IDFilter: IdFilter;
  Image: Image;
  ImageFilter: ImageFilter;
  ImageSorting: ImageSorting;
  Int: Scalars['Int'];
  IntFilter: IntFilter;
  JSON: Scalars['JSON'];
  Post: Post;
  PostFilter: PostFilter;
  PostSorting: PostSorting;
  RootQuery: {};
  SanityAssetSourceData: SanityAssetSourceData;
  SanityAssetSourceDataFilter: SanityAssetSourceDataFilter;
  SanityAssetSourceDataSorting: SanityAssetSourceDataSorting;
  SanityFileAsset: SanityFileAsset;
  SanityFileAssetFilter: SanityFileAssetFilter;
  SanityFileAssetSorting: SanityFileAssetSorting;
  SanityImageAsset: SanityImageAsset;
  SanityImageAssetFilter: SanityImageAssetFilter;
  SanityImageAssetSorting: SanityImageAssetSorting;
  SanityImageCrop: SanityImageCrop;
  SanityImageCropFilter: SanityImageCropFilter;
  SanityImageCropSorting: SanityImageCropSorting;
  SanityImageDimensions: SanityImageDimensions;
  SanityImageDimensionsFilter: SanityImageDimensionsFilter;
  SanityImageDimensionsSorting: SanityImageDimensionsSorting;
  SanityImageHotspot: SanityImageHotspot;
  SanityImageHotspotFilter: SanityImageHotspotFilter;
  SanityImageHotspotSorting: SanityImageHotspotSorting;
  SanityImageMetadata: SanityImageMetadata;
  SanityImageMetadataFilter: SanityImageMetadataFilter;
  SanityImageMetadataSorting: SanityImageMetadataSorting;
  SanityImagePalette: SanityImagePalette;
  SanityImagePaletteFilter: SanityImagePaletteFilter;
  SanityImagePaletteSorting: SanityImagePaletteSorting;
  SanityImagePaletteSwatch: SanityImagePaletteSwatch;
  SanityImagePaletteSwatchFilter: SanityImagePaletteSwatchFilter;
  SanityImagePaletteSwatchSorting: SanityImagePaletteSwatchSorting;
  Sanity_DocumentFilter: Sanity_DocumentFilter;
  Slug: Slug;
  SlugFilter: SlugFilter;
  SlugSorting: SlugSorting;
  Span: Span;
  String: Scalars['String'];
  StringFilter: StringFilter;
};

export type JsonAliasDirectiveArgs = {
  for: Scalars['String'];
};

export type JsonAliasDirectiveResolver<Result, Parent, ContextType = any, Args = JsonAliasDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ReferenceDirectiveArgs = { };

export type ReferenceDirectiveResolver<Result, Parent, ContextType = any, Args = ReferenceDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  _createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _rev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  bioRaw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['Slug']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['Span']>>>, ParentType, ContextType>;
  list?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockOrImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockOrImage'] = ResolversParentTypes['BlockOrImage']> = {
  __resolveType: TypeResolveFn<'Block' | 'Image', ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  _createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _rev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrossDatasetReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CrossDatasetReference'] = ResolversParentTypes['CrossDatasetReference']> = {
  _dataset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _ref?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _weak?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = {
  __resolveType: TypeResolveFn<'Author' | 'Category' | 'Post' | 'SanityFileAsset' | 'SanityImageAsset', ParentType, ContextType>;
  _createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _rev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['SanityFileAsset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeopointResolvers<ContextType = any, ParentType extends ResolversParentTypes['Geopoint'] = ResolversParentTypes['Geopoint']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['SanityImageAsset']>, ParentType, ContextType>;
  crop?: Resolver<Maybe<ResolversTypes['SanityImageCrop']>, ParentType, ContextType>;
  hotspot?: Resolver<Maybe<ResolversTypes['SanityImageHotspot']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  _createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _rev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  bodyRaw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  preview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  seoDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['Slug']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RootQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootQuery'] = ResolversParentTypes['RootQuery']> = {
  Author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<RootQueryAuthorArgs, 'id'>>;
  Category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<RootQueryCategoryArgs, 'id'>>;
  Document?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<RootQueryDocumentArgs, 'id'>>;
  Post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<RootQueryPostArgs, 'id'>>;
  SanityFileAsset?: Resolver<Maybe<ResolversTypes['SanityFileAsset']>, ParentType, ContextType, RequireFields<RootQuerySanityFileAssetArgs, 'id'>>;
  SanityImageAsset?: Resolver<Maybe<ResolversTypes['SanityImageAsset']>, ParentType, ContextType, RequireFields<RootQuerySanityImageAssetArgs, 'id'>>;
  allAuthor?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType, Partial<RootQueryAllAuthorArgs>>;
  allCategory?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, Partial<RootQueryAllCategoryArgs>>;
  allDocument?: Resolver<Array<ResolversTypes['Document']>, ParentType, ContextType, Partial<RootQueryAllDocumentArgs>>;
  allPost?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, Partial<RootQueryAllPostArgs>>;
  allSanityFileAsset?: Resolver<Array<ResolversTypes['SanityFileAsset']>, ParentType, ContextType, Partial<RootQueryAllSanityFileAssetArgs>>;
  allSanityImageAsset?: Resolver<Array<ResolversTypes['SanityImageAsset']>, ParentType, ContextType, Partial<RootQueryAllSanityImageAssetArgs>>;
};

export type SanityAssetSourceDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SanityAssetSourceData'] = ResolversParentTypes['SanityAssetSourceData']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SanityFileAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['SanityFileAsset'] = ResolversParentTypes['SanityFileAsset']> = {
  _createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _rev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sha1hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['SanityAssetSourceData']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SanityImageAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['SanityImageAsset'] = ResolversParentTypes['SanityImageAsset']> = {
  _createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _rev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['SanityImageMetadata']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sha1hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['SanityAssetSourceData']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uploadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SanityImageCropResolvers<ContextType = any, ParentType extends ResolversParentTypes['SanityImageCrop'] = ResolversParentTypes['SanityImageCrop']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bottom?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  left?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  right?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  top?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SanityImageDimensionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SanityImageDimensions'] = ResolversParentTypes['SanityImageDimensions']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SanityImageHotspotResolvers<ContextType = any, ParentType extends ResolversParentTypes['SanityImageHotspot'] = ResolversParentTypes['SanityImageHotspot']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  x?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  y?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SanityImageMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SanityImageMetadata'] = ResolversParentTypes['SanityImageMetadata']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blurHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['SanityImageDimensions']>, ParentType, ContextType>;
  hasAlpha?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOpaque?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Geopoint']>, ParentType, ContextType>;
  lqip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  palette?: Resolver<Maybe<ResolversTypes['SanityImagePalette']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SanityImagePaletteResolvers<ContextType = any, ParentType extends ResolversParentTypes['SanityImagePalette'] = ResolversParentTypes['SanityImagePalette']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  darkMuted?: Resolver<Maybe<ResolversTypes['SanityImagePaletteSwatch']>, ParentType, ContextType>;
  darkVibrant?: Resolver<Maybe<ResolversTypes['SanityImagePaletteSwatch']>, ParentType, ContextType>;
  dominant?: Resolver<Maybe<ResolversTypes['SanityImagePaletteSwatch']>, ParentType, ContextType>;
  lightMuted?: Resolver<Maybe<ResolversTypes['SanityImagePaletteSwatch']>, ParentType, ContextType>;
  lightVibrant?: Resolver<Maybe<ResolversTypes['SanityImagePaletteSwatch']>, ParentType, ContextType>;
  muted?: Resolver<Maybe<ResolversTypes['SanityImagePaletteSwatch']>, ParentType, ContextType>;
  vibrant?: Resolver<Maybe<ResolversTypes['SanityImagePaletteSwatch']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SanityImagePaletteSwatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['SanityImagePaletteSwatch'] = ResolversParentTypes['SanityImagePaletteSwatch']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  background?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foreground?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlugResolvers<ContextType = any, ParentType extends ResolversParentTypes['Slug'] = ResolversParentTypes['Slug']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  current?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Span'] = ResolversParentTypes['Span']> = {
  _key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marks?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Author?: AuthorResolvers<ContextType>;
  Block?: BlockResolvers<ContextType>;
  BlockOrImage?: BlockOrImageResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CrossDatasetReference?: CrossDatasetReferenceResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Document?: DocumentResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Geopoint?: GeopointResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Post?: PostResolvers<ContextType>;
  RootQuery?: RootQueryResolvers<ContextType>;
  SanityAssetSourceData?: SanityAssetSourceDataResolvers<ContextType>;
  SanityFileAsset?: SanityFileAssetResolvers<ContextType>;
  SanityImageAsset?: SanityImageAssetResolvers<ContextType>;
  SanityImageCrop?: SanityImageCropResolvers<ContextType>;
  SanityImageDimensions?: SanityImageDimensionsResolvers<ContextType>;
  SanityImageHotspot?: SanityImageHotspotResolvers<ContextType>;
  SanityImageMetadata?: SanityImageMetadataResolvers<ContextType>;
  SanityImagePalette?: SanityImagePaletteResolvers<ContextType>;
  SanityImagePaletteSwatch?: SanityImagePaletteSwatchResolvers<ContextType>;
  Slug?: SlugResolvers<ContextType>;
  Span?: SpanResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  jsonAlias?: JsonAliasDirectiveResolver<any, any, ContextType>;
  reference?: ReferenceDirectiveResolver<any, any, ContextType>;
};

export const BlogPostFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"bodyRaw"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mainImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bioRaw"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"seoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}}]} as unknown as DocumentNode<BlogPostFragment, unknown>;
export const BlogPostListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPostList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mainImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bioRaw"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogPostListFragment, unknown>;
export const CategoryItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<CategoryItemFragment, unknown>;
export const GetBlogPostsDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlogPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"publishedAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPostList"}}]}}]}},...BlogPostListFragmentDoc.definitions]} as unknown as DocumentNode<GetBlogPostsQuery, GetBlogPostsQueryVariables>;
export const GetBlogPostDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlogPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPost"}}]}}]}},...BlogPostFragmentDoc.definitions]} as unknown as DocumentNode<GetBlogPostQuery, GetBlogPostQueryVariables>;
export const GetHomePageDataDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHomePageData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"publishedAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPostList"}}]}}]}},...BlogPostListFragmentDoc.definitions]} as unknown as DocumentNode<GetHomePageDataQuery, GetHomePageDataQueryVariables>;
export const GetNavDataDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNavData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryItem"}}]}}]}},...CategoryItemFragmentDoc.definitions]} as unknown as DocumentNode<GetNavDataQuery, GetNavDataQueryVariables>;