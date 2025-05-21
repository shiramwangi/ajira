
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model JobListing
 * 
 */
export type JobListing = $Result.DefaultSelection<Prisma.$JobListingPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  JOBSEEKER: 'JOBSEEKER',
  EMPLOYER: 'EMPLOYER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const JobType: {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  CONTRACT: 'CONTRACT',
  INTERNSHIP: 'INTERNSHIP',
  FREELANCE: 'FREELANCE'
};

export type JobType = (typeof JobType)[keyof typeof JobType]


export const ApplicationStatus: {
  PENDING: 'PENDING',
  REVIEWING: 'REVIEWING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const MatchStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type JobType = $Enums.JobType

export const JobType: typeof $Enums.JobType

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobListing`: Exposes CRUD operations for the **JobListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobListings
    * const jobListings = await prisma.jobListing.findMany()
    * ```
    */
  get jobListing(): Prisma.JobListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Profile: 'Profile',
    JobListing: 'JobListing',
    Application: 'Application',
    Match: 'Match',
    Chat: 'Chat',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "jobListing" | "application" | "match" | "chat" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      JobListing: {
        payload: Prisma.$JobListingPayload<ExtArgs>
        fields: Prisma.JobListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobListingPayload>
          }
          findFirst: {
            args: Prisma.JobListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobListingPayload>
          }
          findMany: {
            args: Prisma.JobListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobListingPayload>[]
          }
          create: {
            args: Prisma.JobListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobListingPayload>
          }
          createMany: {
            args: Prisma.JobListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobListingPayload>[]
          }
          delete: {
            args: Prisma.JobListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobListingPayload>
          }
          update: {
            args: Prisma.JobListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobListingPayload>
          }
          deleteMany: {
            args: Prisma.JobListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobListingPayload>[]
          }
          upsert: {
            args: Prisma.JobListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobListingPayload>
          }
          aggregate: {
            args: Prisma.JobListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobListing>
          }
          groupBy: {
            args: Prisma.JobListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobListingCountArgs<ExtArgs>
            result: $Utils.Optional<JobListingCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profile?: ProfileOmit
    jobListing?: JobListingOmit
    application?: ApplicationOmit
    match?: MatchOmit
    chat?: ChatOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applications: number
    jobListings: number
    matches: number
    matchedWith: number
    employerChats: number
    applicantChats: number
    messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    jobListings?: boolean | UserCountOutputTypeCountJobListingsArgs
    matches?: boolean | UserCountOutputTypeCountMatchesArgs
    matchedWith?: boolean | UserCountOutputTypeCountMatchedWithArgs
    employerChats?: boolean | UserCountOutputTypeCountEmployerChatsArgs
    applicantChats?: boolean | UserCountOutputTypeCountApplicantChatsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployerChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicantChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type JobListingCountOutputType
   */

  export type JobListingCountOutputType = {
    applications: number
    matches: number
    chats: number
  }

  export type JobListingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobListingCountOutputTypeCountApplicationsArgs
    matches?: boolean | JobListingCountOutputTypeCountMatchesArgs
    chats?: boolean | JobListingCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * JobListingCountOutputType without action
   */
  export type JobListingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListingCountOutputType
     */
    select?: JobListingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobListingCountOutputType without action
   */
  export type JobListingCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * JobListingCountOutputType without action
   */
  export type JobListingCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * JobListingCountOutputType without action
   */
  export type JobListingCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    jobListings?: boolean | User$jobListingsArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    matchedWith?: boolean | User$matchedWithArgs<ExtArgs>
    employerChats?: boolean | User$employerChatsArgs<ExtArgs>
    applicantChats?: boolean | User$applicantChatsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    jobListings?: boolean | User$jobListingsArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    matchedWith?: boolean | User$matchedWithArgs<ExtArgs>
    employerChats?: boolean | User$employerChatsArgs<ExtArgs>
    applicantChats?: boolean | User$applicantChatsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      jobListings: Prisma.$JobListingPayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
      matchedWith: Prisma.$MatchPayload<ExtArgs>[]
      employerChats: Prisma.$ChatPayload<ExtArgs>[]
      applicantChats: Prisma.$ChatPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobListings<T extends User$jobListingsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobListingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends User$matchesArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchedWith<T extends User$matchedWithArgs<ExtArgs> = {}>(args?: Subset<T, User$matchedWithArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employerChats<T extends User$employerChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$employerChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applicantChats<T extends User$applicantChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicantChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User.jobListings
   */
  export type User$jobListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingInclude<ExtArgs> | null
    where?: JobListingWhereInput
    orderBy?: JobListingOrderByWithRelationInput | JobListingOrderByWithRelationInput[]
    cursor?: JobListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobListingScalarFieldEnum | JobListingScalarFieldEnum[]
  }

  /**
   * User.matches
   */
  export type User$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchedWith
   */
  export type User$matchedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.employerChats
   */
  export type User$employerChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.applicantChats
   */
  export type User$applicantChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    bio: string | null
    resumeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    bio: string | null
    resumeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    bio: number
    skills: number
    experience: number
    education: number
    resumeUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    bio?: true
    resumeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    bio?: true
    resumeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    bio?: true
    skills?: true
    experience?: true
    education?: true
    resumeUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    title: string | null
    bio: string | null
    skills: string[]
    experience: JsonValue | null
    education: JsonValue | null
    resumeUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    bio?: boolean
    skills?: boolean
    experience?: boolean
    education?: boolean
    resumeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    bio?: boolean
    skills?: boolean
    experience?: boolean
    education?: boolean
    resumeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    bio?: boolean
    skills?: boolean
    experience?: boolean
    education?: boolean
    resumeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    bio?: boolean
    skills?: boolean
    experience?: boolean
    education?: boolean
    resumeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "bio" | "skills" | "experience" | "education" | "resumeUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string | null
      bio: string | null
      skills: string[]
      experience: Prisma.JsonValue | null
      education: Prisma.JsonValue | null
      resumeUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly title: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly skills: FieldRef<"Profile", 'String[]'>
    readonly experience: FieldRef<"Profile", 'Json'>
    readonly education: FieldRef<"Profile", 'Json'>
    readonly resumeUrl: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model JobListing
   */

  export type AggregateJobListing = {
    _count: JobListingCountAggregateOutputType | null
    _min: JobListingMinAggregateOutputType | null
    _max: JobListingMaxAggregateOutputType | null
  }

  export type JobListingMinAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    description: string | null
    location: string | null
    salary: string | null
    type: $Enums.JobType | null
    employerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobListingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    description: string | null
    location: string | null
    salary: string | null
    type: $Enums.JobType | null
    employerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobListingCountAggregateOutputType = {
    id: number
    title: number
    company: number
    description: number
    requirements: number
    location: number
    salary: number
    type: number
    employerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobListingMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    description?: true
    location?: true
    salary?: true
    type?: true
    employerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobListingMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    description?: true
    location?: true
    salary?: true
    type?: true
    employerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobListingCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    description?: true
    requirements?: true
    location?: true
    salary?: true
    type?: true
    employerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobListing to aggregate.
     */
    where?: JobListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobListings to fetch.
     */
    orderBy?: JobListingOrderByWithRelationInput | JobListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobListings
    **/
    _count?: true | JobListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobListingMaxAggregateInputType
  }

  export type GetJobListingAggregateType<T extends JobListingAggregateArgs> = {
        [P in keyof T & keyof AggregateJobListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobListing[P]>
      : GetScalarType<T[P], AggregateJobListing[P]>
  }




  export type JobListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobListingWhereInput
    orderBy?: JobListingOrderByWithAggregationInput | JobListingOrderByWithAggregationInput[]
    by: JobListingScalarFieldEnum[] | JobListingScalarFieldEnum
    having?: JobListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobListingCountAggregateInputType | true
    _min?: JobListingMinAggregateInputType
    _max?: JobListingMaxAggregateInputType
  }

  export type JobListingGroupByOutputType = {
    id: string
    title: string
    company: string
    description: string
    requirements: string[]
    location: string | null
    salary: string | null
    type: $Enums.JobType
    employerId: string
    createdAt: Date
    updatedAt: Date
    _count: JobListingCountAggregateOutputType | null
    _min: JobListingMinAggregateOutputType | null
    _max: JobListingMaxAggregateOutputType | null
  }

  type GetJobListingGroupByPayload<T extends JobListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobListingGroupByOutputType[P]>
            : GetScalarType<T[P], JobListingGroupByOutputType[P]>
        }
      >
    >


  export type JobListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    description?: boolean
    requirements?: boolean
    location?: boolean
    salary?: boolean
    type?: boolean
    employerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | UserDefaultArgs<ExtArgs>
    applications?: boolean | JobListing$applicationsArgs<ExtArgs>
    matches?: boolean | JobListing$matchesArgs<ExtArgs>
    chats?: boolean | JobListing$chatsArgs<ExtArgs>
    _count?: boolean | JobListingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobListing"]>

  export type JobListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    description?: boolean
    requirements?: boolean
    location?: boolean
    salary?: boolean
    type?: boolean
    employerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobListing"]>

  export type JobListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    description?: boolean
    requirements?: boolean
    location?: boolean
    salary?: boolean
    type?: boolean
    employerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobListing"]>

  export type JobListingSelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    description?: boolean
    requirements?: boolean
    location?: boolean
    salary?: boolean
    type?: boolean
    employerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "company" | "description" | "requirements" | "location" | "salary" | "type" | "employerId" | "createdAt" | "updatedAt", ExtArgs["result"]["jobListing"]>
  export type JobListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | UserDefaultArgs<ExtArgs>
    applications?: boolean | JobListing$applicationsArgs<ExtArgs>
    matches?: boolean | JobListing$matchesArgs<ExtArgs>
    chats?: boolean | JobListing$chatsArgs<ExtArgs>
    _count?: boolean | JobListingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JobListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JobListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobListing"
    objects: {
      employer: Prisma.$UserPayload<ExtArgs>
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      company: string
      description: string
      requirements: string[]
      location: string | null
      salary: string | null
      type: $Enums.JobType
      employerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobListing"]>
    composites: {}
  }

  type JobListingGetPayload<S extends boolean | null | undefined | JobListingDefaultArgs> = $Result.GetResult<Prisma.$JobListingPayload, S>

  type JobListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobListingCountAggregateInputType | true
    }

  export interface JobListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobListing'], meta: { name: 'JobListing' } }
    /**
     * Find zero or one JobListing that matches the filter.
     * @param {JobListingFindUniqueArgs} args - Arguments to find a JobListing
     * @example
     * // Get one JobListing
     * const jobListing = await prisma.jobListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobListingFindUniqueArgs>(args: SelectSubset<T, JobListingFindUniqueArgs<ExtArgs>>): Prisma__JobListingClient<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobListing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobListingFindUniqueOrThrowArgs} args - Arguments to find a JobListing
     * @example
     * // Get one JobListing
     * const jobListing = await prisma.jobListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobListingFindUniqueOrThrowArgs>(args: SelectSubset<T, JobListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobListingClient<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListingFindFirstArgs} args - Arguments to find a JobListing
     * @example
     * // Get one JobListing
     * const jobListing = await prisma.jobListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobListingFindFirstArgs>(args?: SelectSubset<T, JobListingFindFirstArgs<ExtArgs>>): Prisma__JobListingClient<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListingFindFirstOrThrowArgs} args - Arguments to find a JobListing
     * @example
     * // Get one JobListing
     * const jobListing = await prisma.jobListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobListingFindFirstOrThrowArgs>(args?: SelectSubset<T, JobListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobListingClient<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobListings
     * const jobListings = await prisma.jobListing.findMany()
     * 
     * // Get first 10 JobListings
     * const jobListings = await prisma.jobListing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobListingWithIdOnly = await prisma.jobListing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobListingFindManyArgs>(args?: SelectSubset<T, JobListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobListing.
     * @param {JobListingCreateArgs} args - Arguments to create a JobListing.
     * @example
     * // Create one JobListing
     * const JobListing = await prisma.jobListing.create({
     *   data: {
     *     // ... data to create a JobListing
     *   }
     * })
     * 
     */
    create<T extends JobListingCreateArgs>(args: SelectSubset<T, JobListingCreateArgs<ExtArgs>>): Prisma__JobListingClient<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobListings.
     * @param {JobListingCreateManyArgs} args - Arguments to create many JobListings.
     * @example
     * // Create many JobListings
     * const jobListing = await prisma.jobListing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobListingCreateManyArgs>(args?: SelectSubset<T, JobListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobListings and returns the data saved in the database.
     * @param {JobListingCreateManyAndReturnArgs} args - Arguments to create many JobListings.
     * @example
     * // Create many JobListings
     * const jobListing = await prisma.jobListing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobListings and only return the `id`
     * const jobListingWithIdOnly = await prisma.jobListing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobListingCreateManyAndReturnArgs>(args?: SelectSubset<T, JobListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobListing.
     * @param {JobListingDeleteArgs} args - Arguments to delete one JobListing.
     * @example
     * // Delete one JobListing
     * const JobListing = await prisma.jobListing.delete({
     *   where: {
     *     // ... filter to delete one JobListing
     *   }
     * })
     * 
     */
    delete<T extends JobListingDeleteArgs>(args: SelectSubset<T, JobListingDeleteArgs<ExtArgs>>): Prisma__JobListingClient<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobListing.
     * @param {JobListingUpdateArgs} args - Arguments to update one JobListing.
     * @example
     * // Update one JobListing
     * const jobListing = await prisma.jobListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobListingUpdateArgs>(args: SelectSubset<T, JobListingUpdateArgs<ExtArgs>>): Prisma__JobListingClient<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobListings.
     * @param {JobListingDeleteManyArgs} args - Arguments to filter JobListings to delete.
     * @example
     * // Delete a few JobListings
     * const { count } = await prisma.jobListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobListingDeleteManyArgs>(args?: SelectSubset<T, JobListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobListings
     * const jobListing = await prisma.jobListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobListingUpdateManyArgs>(args: SelectSubset<T, JobListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobListings and returns the data updated in the database.
     * @param {JobListingUpdateManyAndReturnArgs} args - Arguments to update many JobListings.
     * @example
     * // Update many JobListings
     * const jobListing = await prisma.jobListing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobListings and only return the `id`
     * const jobListingWithIdOnly = await prisma.jobListing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobListingUpdateManyAndReturnArgs>(args: SelectSubset<T, JobListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobListing.
     * @param {JobListingUpsertArgs} args - Arguments to update or create a JobListing.
     * @example
     * // Update or create a JobListing
     * const jobListing = await prisma.jobListing.upsert({
     *   create: {
     *     // ... data to create a JobListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobListing we want to update
     *   }
     * })
     */
    upsert<T extends JobListingUpsertArgs>(args: SelectSubset<T, JobListingUpsertArgs<ExtArgs>>): Prisma__JobListingClient<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListingCountArgs} args - Arguments to filter JobListings to count.
     * @example
     * // Count the number of JobListings
     * const count = await prisma.jobListing.count({
     *   where: {
     *     // ... the filter for the JobListings we want to count
     *   }
     * })
    **/
    count<T extends JobListingCountArgs>(
      args?: Subset<T, JobListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobListingAggregateArgs>(args: Subset<T, JobListingAggregateArgs>): Prisma.PrismaPromise<GetJobListingAggregateType<T>>

    /**
     * Group by JobListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobListingGroupByArgs['orderBy'] }
        : { orderBy?: JobListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobListing model
   */
  readonly fields: JobListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends JobListing$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, JobListing$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends JobListing$matchesArgs<ExtArgs> = {}>(args?: Subset<T, JobListing$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends JobListing$chatsArgs<ExtArgs> = {}>(args?: Subset<T, JobListing$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobListing model
   */
  interface JobListingFieldRefs {
    readonly id: FieldRef<"JobListing", 'String'>
    readonly title: FieldRef<"JobListing", 'String'>
    readonly company: FieldRef<"JobListing", 'String'>
    readonly description: FieldRef<"JobListing", 'String'>
    readonly requirements: FieldRef<"JobListing", 'String[]'>
    readonly location: FieldRef<"JobListing", 'String'>
    readonly salary: FieldRef<"JobListing", 'String'>
    readonly type: FieldRef<"JobListing", 'JobType'>
    readonly employerId: FieldRef<"JobListing", 'String'>
    readonly createdAt: FieldRef<"JobListing", 'DateTime'>
    readonly updatedAt: FieldRef<"JobListing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobListing findUnique
   */
  export type JobListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingInclude<ExtArgs> | null
    /**
     * Filter, which JobListing to fetch.
     */
    where: JobListingWhereUniqueInput
  }

  /**
   * JobListing findUniqueOrThrow
   */
  export type JobListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingInclude<ExtArgs> | null
    /**
     * Filter, which JobListing to fetch.
     */
    where: JobListingWhereUniqueInput
  }

  /**
   * JobListing findFirst
   */
  export type JobListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingInclude<ExtArgs> | null
    /**
     * Filter, which JobListing to fetch.
     */
    where?: JobListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobListings to fetch.
     */
    orderBy?: JobListingOrderByWithRelationInput | JobListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobListings.
     */
    cursor?: JobListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobListings.
     */
    distinct?: JobListingScalarFieldEnum | JobListingScalarFieldEnum[]
  }

  /**
   * JobListing findFirstOrThrow
   */
  export type JobListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingInclude<ExtArgs> | null
    /**
     * Filter, which JobListing to fetch.
     */
    where?: JobListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobListings to fetch.
     */
    orderBy?: JobListingOrderByWithRelationInput | JobListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobListings.
     */
    cursor?: JobListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobListings.
     */
    distinct?: JobListingScalarFieldEnum | JobListingScalarFieldEnum[]
  }

  /**
   * JobListing findMany
   */
  export type JobListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingInclude<ExtArgs> | null
    /**
     * Filter, which JobListings to fetch.
     */
    where?: JobListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobListings to fetch.
     */
    orderBy?: JobListingOrderByWithRelationInput | JobListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobListings.
     */
    cursor?: JobListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobListings.
     */
    skip?: number
    distinct?: JobListingScalarFieldEnum | JobListingScalarFieldEnum[]
  }

  /**
   * JobListing create
   */
  export type JobListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingInclude<ExtArgs> | null
    /**
     * The data needed to create a JobListing.
     */
    data: XOR<JobListingCreateInput, JobListingUncheckedCreateInput>
  }

  /**
   * JobListing createMany
   */
  export type JobListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobListings.
     */
    data: JobListingCreateManyInput | JobListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobListing createManyAndReturn
   */
  export type JobListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * The data used to create many JobListings.
     */
    data: JobListingCreateManyInput | JobListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobListing update
   */
  export type JobListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingInclude<ExtArgs> | null
    /**
     * The data needed to update a JobListing.
     */
    data: XOR<JobListingUpdateInput, JobListingUncheckedUpdateInput>
    /**
     * Choose, which JobListing to update.
     */
    where: JobListingWhereUniqueInput
  }

  /**
   * JobListing updateMany
   */
  export type JobListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobListings.
     */
    data: XOR<JobListingUpdateManyMutationInput, JobListingUncheckedUpdateManyInput>
    /**
     * Filter which JobListings to update
     */
    where?: JobListingWhereInput
    /**
     * Limit how many JobListings to update.
     */
    limit?: number
  }

  /**
   * JobListing updateManyAndReturn
   */
  export type JobListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * The data used to update JobListings.
     */
    data: XOR<JobListingUpdateManyMutationInput, JobListingUncheckedUpdateManyInput>
    /**
     * Filter which JobListings to update
     */
    where?: JobListingWhereInput
    /**
     * Limit how many JobListings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobListing upsert
   */
  export type JobListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingInclude<ExtArgs> | null
    /**
     * The filter to search for the JobListing to update in case it exists.
     */
    where: JobListingWhereUniqueInput
    /**
     * In case the JobListing found by the `where` argument doesn't exist, create a new JobListing with this data.
     */
    create: XOR<JobListingCreateInput, JobListingUncheckedCreateInput>
    /**
     * In case the JobListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobListingUpdateInput, JobListingUncheckedUpdateInput>
  }

  /**
   * JobListing delete
   */
  export type JobListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingInclude<ExtArgs> | null
    /**
     * Filter which JobListing to delete.
     */
    where: JobListingWhereUniqueInput
  }

  /**
   * JobListing deleteMany
   */
  export type JobListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobListings to delete
     */
    where?: JobListingWhereInput
    /**
     * Limit how many JobListings to delete.
     */
    limit?: number
  }

  /**
   * JobListing.applications
   */
  export type JobListing$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * JobListing.matches
   */
  export type JobListing$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * JobListing.chats
   */
  export type JobListing$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * JobListing without action
   */
  export type JobListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListing
     */
    select?: JobListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobListing
     */
    omit?: JobListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobListingInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    jobListingId: string | null
    applicantId: string | null
    status: $Enums.ApplicationStatus | null
    coverLetter: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    jobListingId: string | null
    applicantId: string | null
    status: $Enums.ApplicationStatus | null
    coverLetter: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    jobListingId: number
    applicantId: number
    status: number
    coverLetter: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    jobListingId?: true
    applicantId?: true
    status?: true
    coverLetter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    jobListingId?: true
    applicantId?: true
    status?: true
    coverLetter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    jobListingId?: true
    applicantId?: true
    status?: true
    coverLetter?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    jobListingId: string
    applicantId: string
    status: $Enums.ApplicationStatus
    coverLetter: string | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobListingId?: boolean
    applicantId?: boolean
    status?: boolean
    coverLetter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobListingId?: boolean
    applicantId?: boolean
    status?: boolean
    coverLetter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobListingId?: boolean
    applicantId?: boolean
    status?: boolean
    coverLetter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    jobListingId?: boolean
    applicantId?: boolean
    status?: boolean
    coverLetter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobListingId" | "applicantId" | "status" | "coverLetter" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      jobListing: Prisma.$JobListingPayload<ExtArgs>
      applicant: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobListingId: string
      applicantId: string
      status: $Enums.ApplicationStatus
      coverLetter: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobListing<T extends JobListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobListingDefaultArgs<ExtArgs>>): Prisma__JobListingClient<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applicant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly jobListingId: FieldRef<"Application", 'String'>
    readonly applicantId: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly coverLetter: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    jobListingId: string | null
    userId: string | null
    matchedWithId: string | null
    status: $Enums.MatchStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    jobListingId: string | null
    userId: string | null
    matchedWithId: string | null
    status: $Enums.MatchStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    jobListingId: number
    userId: number
    matchedWithId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    jobListingId?: true
    userId?: true
    matchedWithId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    jobListingId?: true
    userId?: true
    matchedWithId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    jobListingId?: true
    userId?: true
    matchedWithId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    jobListingId: string
    userId: string
    matchedWithId: string
    status: $Enums.MatchStatus
    createdAt: Date
    updatedAt: Date
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobListingId?: boolean
    userId?: boolean
    matchedWithId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedWith?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobListingId?: boolean
    userId?: boolean
    matchedWithId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedWith?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobListingId?: boolean
    userId?: boolean
    matchedWithId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedWith?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    jobListingId?: boolean
    userId?: boolean
    matchedWithId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobListingId" | "userId" | "matchedWithId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedWith?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedWith?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedWith?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      jobListing: Prisma.$JobListingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      matchedWith: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobListingId: string
      userId: string
      matchedWithId: string
      status: $Enums.MatchStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobListing<T extends JobListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobListingDefaultArgs<ExtArgs>>): Prisma__JobListingClient<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matchedWith<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly jobListingId: FieldRef<"Match", 'String'>
    readonly userId: FieldRef<"Match", 'String'>
    readonly matchedWithId: FieldRef<"Match", 'String'>
    readonly status: FieldRef<"Match", 'MatchStatus'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly updatedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    jobListingId: string | null
    employerId: string | null
    applicantId: string | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    jobListingId: string | null
    employerId: string | null
    applicantId: string | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    jobListingId: number
    employerId: number
    applicantId: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    jobListingId?: true
    employerId?: true
    applicantId?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    jobListingId?: true
    employerId?: true
    applicantId?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    jobListingId?: true
    employerId?: true
    applicantId?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    jobListingId: string
    employerId: string
    applicantId: string
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobListingId?: boolean
    employerId?: boolean
    applicantId?: boolean
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    employer?: boolean | UserDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobListingId?: boolean
    employerId?: boolean
    applicantId?: boolean
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    employer?: boolean | UserDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobListingId?: boolean
    employerId?: boolean
    applicantId?: boolean
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    employer?: boolean | UserDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobListingId?: boolean
    employerId?: boolean
    applicantId?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "jobListingId" | "employerId" | "applicantId", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    employer?: boolean | UserDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    employer?: boolean | UserDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobListing?: boolean | JobListingDefaultArgs<ExtArgs>
    employer?: boolean | UserDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      jobListing: Prisma.$JobListingPayload<ExtArgs>
      employer: Prisma.$UserPayload<ExtArgs>
      applicant: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      jobListingId: string
      employerId: string
      applicantId: string
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobListing<T extends JobListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobListingDefaultArgs<ExtArgs>>): Prisma__JobListingClient<$Result.GetResult<Prisma.$JobListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applicant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
    readonly jobListingId: FieldRef<"Chat", 'String'>
    readonly employerId: FieldRef<"Chat", 'String'>
    readonly applicantId: FieldRef<"Chat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    chatId: string | null
    senderId: string | null
    read: boolean | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    chatId: string | null
    senderId: string | null
    read: boolean | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    chatId: number
    senderId: number
    read: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    chatId?: true
    senderId?: true
    read?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    chatId?: true
    senderId?: true
    read?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    chatId?: true
    senderId?: true
    read?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    chatId: string
    senderId: string
    read: boolean
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    chatId?: boolean
    senderId?: boolean
    read?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    chatId?: boolean
    senderId?: boolean
    read?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    chatId?: boolean
    senderId?: boolean
    read?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    chatId?: boolean
    senderId?: boolean
    read?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "chatId" | "senderId" | "read", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      chatId: string
      senderId: string
      read: boolean
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly read: FieldRef<"Message", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    bio: 'bio',
    skills: 'skills',
    experience: 'experience',
    education: 'education',
    resumeUrl: 'resumeUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const JobListingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    description: 'description',
    requirements: 'requirements',
    location: 'location',
    salary: 'salary',
    type: 'type',
    employerId: 'employerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobListingScalarFieldEnum = (typeof JobListingScalarFieldEnum)[keyof typeof JobListingScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    jobListingId: 'jobListingId',
    applicantId: 'applicantId',
    status: 'status',
    coverLetter: 'coverLetter',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    jobListingId: 'jobListingId',
    userId: 'userId',
    matchedWithId: 'matchedWithId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    jobListingId: 'jobListingId',
    employerId: 'employerId',
    applicantId: 'applicantId'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    chatId: 'chatId',
    senderId: 'senderId',
    read: 'read'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'JobType'
   */
  export type EnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType'>
    


  /**
   * Reference to a field of type 'JobType[]'
   */
  export type ListEnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>
    


  /**
   * Reference to a field of type 'MatchStatus[]'
   */
  export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    applications?: ApplicationListRelationFilter
    jobListings?: JobListingListRelationFilter
    matches?: MatchListRelationFilter
    matchedWith?: MatchListRelationFilter
    employerChats?: ChatListRelationFilter
    applicantChats?: ChatListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
    jobListings?: JobListingOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
    matchedWith?: MatchOrderByRelationAggregateInput
    employerChats?: ChatOrderByRelationAggregateInput
    applicantChats?: ChatOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    applications?: ApplicationListRelationFilter
    jobListings?: JobListingListRelationFilter
    matches?: MatchListRelationFilter
    matchedWith?: MatchListRelationFilter
    employerChats?: ChatListRelationFilter
    applicantChats?: ChatListRelationFilter
    messages?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    title?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    skills?: StringNullableListFilter<"Profile">
    experience?: JsonNullableFilter<"Profile">
    education?: JsonNullableFilter<"Profile">
    resumeUrl?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrder
    experience?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    title?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    skills?: StringNullableListFilter<"Profile">
    experience?: JsonNullableFilter<"Profile">
    education?: JsonNullableFilter<"Profile">
    resumeUrl?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrder
    experience?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
    title?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    skills?: StringNullableListFilter<"Profile">
    experience?: JsonNullableWithAggregatesFilter<"Profile">
    education?: JsonNullableWithAggregatesFilter<"Profile">
    resumeUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type JobListingWhereInput = {
    AND?: JobListingWhereInput | JobListingWhereInput[]
    OR?: JobListingWhereInput[]
    NOT?: JobListingWhereInput | JobListingWhereInput[]
    id?: StringFilter<"JobListing"> | string
    title?: StringFilter<"JobListing"> | string
    company?: StringFilter<"JobListing"> | string
    description?: StringFilter<"JobListing"> | string
    requirements?: StringNullableListFilter<"JobListing">
    location?: StringNullableFilter<"JobListing"> | string | null
    salary?: StringNullableFilter<"JobListing"> | string | null
    type?: EnumJobTypeFilter<"JobListing"> | $Enums.JobType
    employerId?: StringFilter<"JobListing"> | string
    createdAt?: DateTimeFilter<"JobListing"> | Date | string
    updatedAt?: DateTimeFilter<"JobListing"> | Date | string
    employer?: XOR<UserScalarRelationFilter, UserWhereInput>
    applications?: ApplicationListRelationFilter
    matches?: MatchListRelationFilter
    chats?: ChatListRelationFilter
  }

  export type JobListingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    location?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    type?: SortOrder
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employer?: UserOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
  }

  export type JobListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobListingWhereInput | JobListingWhereInput[]
    OR?: JobListingWhereInput[]
    NOT?: JobListingWhereInput | JobListingWhereInput[]
    title?: StringFilter<"JobListing"> | string
    company?: StringFilter<"JobListing"> | string
    description?: StringFilter<"JobListing"> | string
    requirements?: StringNullableListFilter<"JobListing">
    location?: StringNullableFilter<"JobListing"> | string | null
    salary?: StringNullableFilter<"JobListing"> | string | null
    type?: EnumJobTypeFilter<"JobListing"> | $Enums.JobType
    employerId?: StringFilter<"JobListing"> | string
    createdAt?: DateTimeFilter<"JobListing"> | Date | string
    updatedAt?: DateTimeFilter<"JobListing"> | Date | string
    employer?: XOR<UserScalarRelationFilter, UserWhereInput>
    applications?: ApplicationListRelationFilter
    matches?: MatchListRelationFilter
    chats?: ChatListRelationFilter
  }, "id">

  export type JobListingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    location?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    type?: SortOrder
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobListingCountOrderByAggregateInput
    _max?: JobListingMaxOrderByAggregateInput
    _min?: JobListingMinOrderByAggregateInput
  }

  export type JobListingScalarWhereWithAggregatesInput = {
    AND?: JobListingScalarWhereWithAggregatesInput | JobListingScalarWhereWithAggregatesInput[]
    OR?: JobListingScalarWhereWithAggregatesInput[]
    NOT?: JobListingScalarWhereWithAggregatesInput | JobListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobListing"> | string
    title?: StringWithAggregatesFilter<"JobListing"> | string
    company?: StringWithAggregatesFilter<"JobListing"> | string
    description?: StringWithAggregatesFilter<"JobListing"> | string
    requirements?: StringNullableListFilter<"JobListing">
    location?: StringNullableWithAggregatesFilter<"JobListing"> | string | null
    salary?: StringNullableWithAggregatesFilter<"JobListing"> | string | null
    type?: EnumJobTypeWithAggregatesFilter<"JobListing"> | $Enums.JobType
    employerId?: StringWithAggregatesFilter<"JobListing"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JobListing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobListing"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    jobListingId?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    coverLetter?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    jobListing?: XOR<JobListingScalarRelationFilter, JobListingWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    jobListingId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    coverLetter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobListing?: JobListingOrderByWithRelationInput
    applicant?: UserOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    jobListingId?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    coverLetter?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    jobListing?: XOR<JobListingScalarRelationFilter, JobListingWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    jobListingId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    coverLetter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    jobListingId?: StringWithAggregatesFilter<"Application"> | string
    applicantId?: StringWithAggregatesFilter<"Application"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    coverLetter?: StringNullableWithAggregatesFilter<"Application"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    jobListingId?: StringFilter<"Match"> | string
    userId?: StringFilter<"Match"> | string
    matchedWithId?: StringFilter<"Match"> | string
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    jobListing?: XOR<JobListingScalarRelationFilter, JobListingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matchedWith?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    jobListingId?: SortOrder
    userId?: SortOrder
    matchedWithId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobListing?: JobListingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    matchedWith?: UserOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    jobListingId?: StringFilter<"Match"> | string
    userId?: StringFilter<"Match"> | string
    matchedWithId?: StringFilter<"Match"> | string
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    jobListing?: XOR<JobListingScalarRelationFilter, JobListingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matchedWith?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    jobListingId?: SortOrder
    userId?: SortOrder
    matchedWithId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    jobListingId?: StringWithAggregatesFilter<"Match"> | string
    userId?: StringWithAggregatesFilter<"Match"> | string
    matchedWithId?: StringWithAggregatesFilter<"Match"> | string
    status?: EnumMatchStatusWithAggregatesFilter<"Match"> | $Enums.MatchStatus
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    jobListingId?: StringFilter<"Chat"> | string
    employerId?: StringFilter<"Chat"> | string
    applicantId?: StringFilter<"Chat"> | string
    jobListing?: XOR<JobListingScalarRelationFilter, JobListingWhereInput>
    employer?: XOR<UserScalarRelationFilter, UserWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobListingId?: SortOrder
    employerId?: SortOrder
    applicantId?: SortOrder
    jobListing?: JobListingOrderByWithRelationInput
    employer?: UserOrderByWithRelationInput
    applicant?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobListingId_employerId_applicantId?: ChatJobListingIdEmployerIdApplicantIdCompoundUniqueInput
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    jobListingId?: StringFilter<"Chat"> | string
    employerId?: StringFilter<"Chat"> | string
    applicantId?: StringFilter<"Chat"> | string
    jobListing?: XOR<JobListingScalarRelationFilter, JobListingWhereInput>
    employer?: XOR<UserScalarRelationFilter, UserWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }, "id" | "jobListingId_employerId_applicantId">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobListingId?: SortOrder
    employerId?: SortOrder
    applicantId?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    jobListingId?: StringWithAggregatesFilter<"Chat"> | string
    employerId?: StringWithAggregatesFilter<"Chat"> | string
    applicantId?: StringWithAggregatesFilter<"Chat"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chatId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    read?: BoolFilter<"Message"> | boolean
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    read?: SortOrder
    chat?: ChatOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chatId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    read?: BoolFilter<"Message"> | boolean
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    read?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    read?: BoolWithAggregatesFilter<"Message"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingCreateNestedManyWithoutEmployerInput
    matches?: MatchCreateNestedManyWithoutUserInput
    matchedWith?: MatchCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatCreateNestedManyWithoutApplicantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingUncheckedCreateNestedManyWithoutEmployerInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchUncheckedCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatUncheckedCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatUncheckedCreateNestedManyWithoutApplicantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUpdateManyWithoutEmployerNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUpdateManyWithoutApplicantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUncheckedUpdateManyWithoutEmployerNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUncheckedUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUncheckedUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUncheckedUpdateManyWithoutApplicantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    title?: string | null
    bio?: string | null
    skills?: ProfileCreateskillsInput | string[]
    experience?: NullableJsonNullValueInput | InputJsonValue
    education?: NullableJsonNullValueInput | InputJsonValue
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string | null
    bio?: string | null
    skills?: ProfileCreateskillsInput | string[]
    experience?: NullableJsonNullValueInput | InputJsonValue
    education?: NullableJsonNullValueInput | InputJsonValue
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: ProfileUpdateskillsInput | string[]
    experience?: NullableJsonNullValueInput | InputJsonValue
    education?: NullableJsonNullValueInput | InputJsonValue
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: ProfileUpdateskillsInput | string[]
    experience?: NullableJsonNullValueInput | InputJsonValue
    education?: NullableJsonNullValueInput | InputJsonValue
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: string
    title?: string | null
    bio?: string | null
    skills?: ProfileCreateskillsInput | string[]
    experience?: NullableJsonNullValueInput | InputJsonValue
    education?: NullableJsonNullValueInput | InputJsonValue
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: ProfileUpdateskillsInput | string[]
    experience?: NullableJsonNullValueInput | InputJsonValue
    education?: NullableJsonNullValueInput | InputJsonValue
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: ProfileUpdateskillsInput | string[]
    experience?: NullableJsonNullValueInput | InputJsonValue
    education?: NullableJsonNullValueInput | InputJsonValue
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobListingCreateInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: UserCreateNestedOneWithoutJobListingsInput
    applications?: ApplicationCreateNestedManyWithoutJobListingInput
    matches?: MatchCreateNestedManyWithoutJobListingInput
    chats?: ChatCreateNestedManyWithoutJobListingInput
  }

  export type JobListingUncheckedCreateInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    employerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobListingInput
    matches?: MatchUncheckedCreateNestedManyWithoutJobListingInput
    chats?: ChatUncheckedCreateNestedManyWithoutJobListingInput
  }

  export type JobListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: UserUpdateOneRequiredWithoutJobListingsNestedInput
    applications?: ApplicationUpdateManyWithoutJobListingNestedInput
    matches?: MatchUpdateManyWithoutJobListingNestedInput
    chats?: ChatUpdateManyWithoutJobListingNestedInput
  }

  export type JobListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    employerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobListingNestedInput
    matches?: MatchUncheckedUpdateManyWithoutJobListingNestedInput
    chats?: ChatUncheckedUpdateManyWithoutJobListingNestedInput
  }

  export type JobListingCreateManyInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    employerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    employerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListing: JobListingCreateNestedOneWithoutApplicationsInput
    applicant: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    jobListingId: string
    applicantId: string
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListing?: JobListingUpdateOneRequiredWithoutApplicationsNestedInput
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyInput = {
    id?: string
    jobListingId: string
    applicantId: string
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListing: JobListingCreateNestedOneWithoutMatchesInput
    user: UserCreateNestedOneWithoutMatchesInput
    matchedWith: UserCreateNestedOneWithoutMatchedWithInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    jobListingId: string
    userId: string
    matchedWithId: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListing?: JobListingUpdateOneRequiredWithoutMatchesNestedInput
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
    matchedWith?: UserUpdateOneRequiredWithoutMatchedWithNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedWithId?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyInput = {
    id?: string
    jobListingId: string
    userId: string
    matchedWithId: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedWithId?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListing: JobListingCreateNestedOneWithoutChatsInput
    employer: UserCreateNestedOneWithoutEmployerChatsInput
    applicant: UserCreateNestedOneWithoutApplicantChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListingId: string
    employerId: string
    applicantId: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListing?: JobListingUpdateOneRequiredWithoutChatsNestedInput
    employer?: UserUpdateOneRequiredWithoutEmployerChatsNestedInput
    applicant?: UserUpdateOneRequiredWithoutApplicantChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    employerId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListingId: string
    employerId: string
    applicantId: string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    employerId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    read?: boolean
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    chatId: string
    senderId: string
    read?: boolean
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    chatId: string
    senderId: string
    read?: boolean
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type JobListingListRelationFilter = {
    every?: JobListingWhereInput
    some?: JobListingWhereInput
    none?: JobListingWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    resumeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    bio?: SortOrder
    resumeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    bio?: SortOrder
    resumeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type JobListingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    type?: SortOrder
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobListingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    description?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    type?: SortOrder
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobListingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    description?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    type?: SortOrder
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type JobListingScalarRelationFilter = {
    is?: JobListingWhereInput
    isNot?: JobListingWhereInput
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    jobListingId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    coverLetter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    jobListingId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    coverLetter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    jobListingId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    coverLetter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    jobListingId?: SortOrder
    userId?: SortOrder
    matchedWithId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    jobListingId?: SortOrder
    userId?: SortOrder
    matchedWithId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    jobListingId?: SortOrder
    userId?: SortOrder
    matchedWithId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type ChatJobListingIdEmployerIdApplicantIdCompoundUniqueInput = {
    jobListingId: string
    employerId: string
    applicantId: string
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobListingId?: SortOrder
    employerId?: SortOrder
    applicantId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobListingId?: SortOrder
    employerId?: SortOrder
    applicantId?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobListingId?: SortOrder
    employerId?: SortOrder
    applicantId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    read?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    read?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    read?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type JobListingCreateNestedManyWithoutEmployerInput = {
    create?: XOR<JobListingCreateWithoutEmployerInput, JobListingUncheckedCreateWithoutEmployerInput> | JobListingCreateWithoutEmployerInput[] | JobListingUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobListingCreateOrConnectWithoutEmployerInput | JobListingCreateOrConnectWithoutEmployerInput[]
    createMany?: JobListingCreateManyEmployerInputEnvelope
    connect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput> | MatchCreateWithoutUserInput[] | MatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserInput | MatchCreateOrConnectWithoutUserInput[]
    createMany?: MatchCreateManyUserInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutMatchedWithInput = {
    create?: XOR<MatchCreateWithoutMatchedWithInput, MatchUncheckedCreateWithoutMatchedWithInput> | MatchCreateWithoutMatchedWithInput[] | MatchUncheckedCreateWithoutMatchedWithInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutMatchedWithInput | MatchCreateOrConnectWithoutMatchedWithInput[]
    createMany?: MatchCreateManyMatchedWithInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutEmployerInput = {
    create?: XOR<ChatCreateWithoutEmployerInput, ChatUncheckedCreateWithoutEmployerInput> | ChatCreateWithoutEmployerInput[] | ChatUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutEmployerInput | ChatCreateOrConnectWithoutEmployerInput[]
    createMany?: ChatCreateManyEmployerInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ChatCreateWithoutApplicantInput, ChatUncheckedCreateWithoutApplicantInput> | ChatCreateWithoutApplicantInput[] | ChatUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutApplicantInput | ChatCreateOrConnectWithoutApplicantInput[]
    createMany?: ChatCreateManyApplicantInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type JobListingUncheckedCreateNestedManyWithoutEmployerInput = {
    create?: XOR<JobListingCreateWithoutEmployerInput, JobListingUncheckedCreateWithoutEmployerInput> | JobListingCreateWithoutEmployerInput[] | JobListingUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobListingCreateOrConnectWithoutEmployerInput | JobListingCreateOrConnectWithoutEmployerInput[]
    createMany?: JobListingCreateManyEmployerInputEnvelope
    connect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput> | MatchCreateWithoutUserInput[] | MatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserInput | MatchCreateOrConnectWithoutUserInput[]
    createMany?: MatchCreateManyUserInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutMatchedWithInput = {
    create?: XOR<MatchCreateWithoutMatchedWithInput, MatchUncheckedCreateWithoutMatchedWithInput> | MatchCreateWithoutMatchedWithInput[] | MatchUncheckedCreateWithoutMatchedWithInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutMatchedWithInput | MatchCreateOrConnectWithoutMatchedWithInput[]
    createMany?: MatchCreateManyMatchedWithInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutEmployerInput = {
    create?: XOR<ChatCreateWithoutEmployerInput, ChatUncheckedCreateWithoutEmployerInput> | ChatCreateWithoutEmployerInput[] | ChatUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutEmployerInput | ChatCreateOrConnectWithoutEmployerInput[]
    createMany?: ChatCreateManyEmployerInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ChatCreateWithoutApplicantInput, ChatUncheckedCreateWithoutApplicantInput> | ChatCreateWithoutApplicantInput[] | ChatUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutApplicantInput | ChatCreateOrConnectWithoutApplicantInput[]
    createMany?: ChatCreateManyApplicantInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type JobListingUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<JobListingCreateWithoutEmployerInput, JobListingUncheckedCreateWithoutEmployerInput> | JobListingCreateWithoutEmployerInput[] | JobListingUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobListingCreateOrConnectWithoutEmployerInput | JobListingCreateOrConnectWithoutEmployerInput[]
    upsert?: JobListingUpsertWithWhereUniqueWithoutEmployerInput | JobListingUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: JobListingCreateManyEmployerInputEnvelope
    set?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[]
    disconnect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[]
    delete?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[]
    connect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[]
    update?: JobListingUpdateWithWhereUniqueWithoutEmployerInput | JobListingUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: JobListingUpdateManyWithWhereWithoutEmployerInput | JobListingUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: JobListingScalarWhereInput | JobListingScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput> | MatchCreateWithoutUserInput[] | MatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserInput | MatchCreateOrConnectWithoutUserInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserInput | MatchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchCreateManyUserInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserInput | MatchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserInput | MatchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutMatchedWithNestedInput = {
    create?: XOR<MatchCreateWithoutMatchedWithInput, MatchUncheckedCreateWithoutMatchedWithInput> | MatchCreateWithoutMatchedWithInput[] | MatchUncheckedCreateWithoutMatchedWithInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutMatchedWithInput | MatchCreateOrConnectWithoutMatchedWithInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutMatchedWithInput | MatchUpsertWithWhereUniqueWithoutMatchedWithInput[]
    createMany?: MatchCreateManyMatchedWithInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutMatchedWithInput | MatchUpdateWithWhereUniqueWithoutMatchedWithInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutMatchedWithInput | MatchUpdateManyWithWhereWithoutMatchedWithInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<ChatCreateWithoutEmployerInput, ChatUncheckedCreateWithoutEmployerInput> | ChatCreateWithoutEmployerInput[] | ChatUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutEmployerInput | ChatCreateOrConnectWithoutEmployerInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutEmployerInput | ChatUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: ChatCreateManyEmployerInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutEmployerInput | ChatUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutEmployerInput | ChatUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ChatCreateWithoutApplicantInput, ChatUncheckedCreateWithoutApplicantInput> | ChatCreateWithoutApplicantInput[] | ChatUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutApplicantInput | ChatCreateOrConnectWithoutApplicantInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutApplicantInput | ChatUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ChatCreateManyApplicantInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutApplicantInput | ChatUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutApplicantInput | ChatUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type JobListingUncheckedUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<JobListingCreateWithoutEmployerInput, JobListingUncheckedCreateWithoutEmployerInput> | JobListingCreateWithoutEmployerInput[] | JobListingUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobListingCreateOrConnectWithoutEmployerInput | JobListingCreateOrConnectWithoutEmployerInput[]
    upsert?: JobListingUpsertWithWhereUniqueWithoutEmployerInput | JobListingUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: JobListingCreateManyEmployerInputEnvelope
    set?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[]
    disconnect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[]
    delete?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[]
    connect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[]
    update?: JobListingUpdateWithWhereUniqueWithoutEmployerInput | JobListingUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: JobListingUpdateManyWithWhereWithoutEmployerInput | JobListingUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: JobListingScalarWhereInput | JobListingScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput> | MatchCreateWithoutUserInput[] | MatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserInput | MatchCreateOrConnectWithoutUserInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserInput | MatchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchCreateManyUserInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserInput | MatchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserInput | MatchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutMatchedWithNestedInput = {
    create?: XOR<MatchCreateWithoutMatchedWithInput, MatchUncheckedCreateWithoutMatchedWithInput> | MatchCreateWithoutMatchedWithInput[] | MatchUncheckedCreateWithoutMatchedWithInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutMatchedWithInput | MatchCreateOrConnectWithoutMatchedWithInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutMatchedWithInput | MatchUpsertWithWhereUniqueWithoutMatchedWithInput[]
    createMany?: MatchCreateManyMatchedWithInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutMatchedWithInput | MatchUpdateWithWhereUniqueWithoutMatchedWithInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutMatchedWithInput | MatchUpdateManyWithWhereWithoutMatchedWithInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<ChatCreateWithoutEmployerInput, ChatUncheckedCreateWithoutEmployerInput> | ChatCreateWithoutEmployerInput[] | ChatUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutEmployerInput | ChatCreateOrConnectWithoutEmployerInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutEmployerInput | ChatUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: ChatCreateManyEmployerInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutEmployerInput | ChatUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutEmployerInput | ChatUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ChatCreateWithoutApplicantInput, ChatUncheckedCreateWithoutApplicantInput> | ChatCreateWithoutApplicantInput[] | ChatUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutApplicantInput | ChatCreateOrConnectWithoutApplicantInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutApplicantInput | ChatUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ChatCreateManyApplicantInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutApplicantInput | ChatUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutApplicantInput | ChatUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ProfileCreateskillsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ProfileUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type JobListingCreaterequirementsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutJobListingsInput = {
    create?: XOR<UserCreateWithoutJobListingsInput, UserUncheckedCreateWithoutJobListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobListingsInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutJobListingInput = {
    create?: XOR<ApplicationCreateWithoutJobListingInput, ApplicationUncheckedCreateWithoutJobListingInput> | ApplicationCreateWithoutJobListingInput[] | ApplicationUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobListingInput | ApplicationCreateOrConnectWithoutJobListingInput[]
    createMany?: ApplicationCreateManyJobListingInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutJobListingInput = {
    create?: XOR<MatchCreateWithoutJobListingInput, MatchUncheckedCreateWithoutJobListingInput> | MatchCreateWithoutJobListingInput[] | MatchUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutJobListingInput | MatchCreateOrConnectWithoutJobListingInput[]
    createMany?: MatchCreateManyJobListingInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutJobListingInput = {
    create?: XOR<ChatCreateWithoutJobListingInput, ChatUncheckedCreateWithoutJobListingInput> | ChatCreateWithoutJobListingInput[] | ChatUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutJobListingInput | ChatCreateOrConnectWithoutJobListingInput[]
    createMany?: ChatCreateManyJobListingInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutJobListingInput = {
    create?: XOR<ApplicationCreateWithoutJobListingInput, ApplicationUncheckedCreateWithoutJobListingInput> | ApplicationCreateWithoutJobListingInput[] | ApplicationUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobListingInput | ApplicationCreateOrConnectWithoutJobListingInput[]
    createMany?: ApplicationCreateManyJobListingInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutJobListingInput = {
    create?: XOR<MatchCreateWithoutJobListingInput, MatchUncheckedCreateWithoutJobListingInput> | MatchCreateWithoutJobListingInput[] | MatchUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutJobListingInput | MatchCreateOrConnectWithoutJobListingInput[]
    createMany?: MatchCreateManyJobListingInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutJobListingInput = {
    create?: XOR<ChatCreateWithoutJobListingInput, ChatUncheckedCreateWithoutJobListingInput> | ChatCreateWithoutJobListingInput[] | ChatUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutJobListingInput | ChatCreateOrConnectWithoutJobListingInput[]
    createMany?: ChatCreateManyJobListingInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type JobListingUpdaterequirementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobType
  }

  export type UserUpdateOneRequiredWithoutJobListingsNestedInput = {
    create?: XOR<UserCreateWithoutJobListingsInput, UserUncheckedCreateWithoutJobListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobListingsInput
    upsert?: UserUpsertWithoutJobListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobListingsInput, UserUpdateWithoutJobListingsInput>, UserUncheckedUpdateWithoutJobListingsInput>
  }

  export type ApplicationUpdateManyWithoutJobListingNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobListingInput, ApplicationUncheckedCreateWithoutJobListingInput> | ApplicationCreateWithoutJobListingInput[] | ApplicationUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobListingInput | ApplicationCreateOrConnectWithoutJobListingInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobListingInput | ApplicationUpsertWithWhereUniqueWithoutJobListingInput[]
    createMany?: ApplicationCreateManyJobListingInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobListingInput | ApplicationUpdateWithWhereUniqueWithoutJobListingInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobListingInput | ApplicationUpdateManyWithWhereWithoutJobListingInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutJobListingNestedInput = {
    create?: XOR<MatchCreateWithoutJobListingInput, MatchUncheckedCreateWithoutJobListingInput> | MatchCreateWithoutJobListingInput[] | MatchUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutJobListingInput | MatchCreateOrConnectWithoutJobListingInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutJobListingInput | MatchUpsertWithWhereUniqueWithoutJobListingInput[]
    createMany?: MatchCreateManyJobListingInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutJobListingInput | MatchUpdateWithWhereUniqueWithoutJobListingInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutJobListingInput | MatchUpdateManyWithWhereWithoutJobListingInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutJobListingNestedInput = {
    create?: XOR<ChatCreateWithoutJobListingInput, ChatUncheckedCreateWithoutJobListingInput> | ChatCreateWithoutJobListingInput[] | ChatUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutJobListingInput | ChatCreateOrConnectWithoutJobListingInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutJobListingInput | ChatUpsertWithWhereUniqueWithoutJobListingInput[]
    createMany?: ChatCreateManyJobListingInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutJobListingInput | ChatUpdateWithWhereUniqueWithoutJobListingInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutJobListingInput | ChatUpdateManyWithWhereWithoutJobListingInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutJobListingNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobListingInput, ApplicationUncheckedCreateWithoutJobListingInput> | ApplicationCreateWithoutJobListingInput[] | ApplicationUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobListingInput | ApplicationCreateOrConnectWithoutJobListingInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobListingInput | ApplicationUpsertWithWhereUniqueWithoutJobListingInput[]
    createMany?: ApplicationCreateManyJobListingInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobListingInput | ApplicationUpdateWithWhereUniqueWithoutJobListingInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobListingInput | ApplicationUpdateManyWithWhereWithoutJobListingInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutJobListingNestedInput = {
    create?: XOR<MatchCreateWithoutJobListingInput, MatchUncheckedCreateWithoutJobListingInput> | MatchCreateWithoutJobListingInput[] | MatchUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutJobListingInput | MatchCreateOrConnectWithoutJobListingInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutJobListingInput | MatchUpsertWithWhereUniqueWithoutJobListingInput[]
    createMany?: MatchCreateManyJobListingInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutJobListingInput | MatchUpdateWithWhereUniqueWithoutJobListingInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutJobListingInput | MatchUpdateManyWithWhereWithoutJobListingInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutJobListingNestedInput = {
    create?: XOR<ChatCreateWithoutJobListingInput, ChatUncheckedCreateWithoutJobListingInput> | ChatCreateWithoutJobListingInput[] | ChatUncheckedCreateWithoutJobListingInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutJobListingInput | ChatCreateOrConnectWithoutJobListingInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutJobListingInput | ChatUpsertWithWhereUniqueWithoutJobListingInput[]
    createMany?: ChatCreateManyJobListingInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutJobListingInput | ChatUpdateWithWhereUniqueWithoutJobListingInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutJobListingInput | ChatUpdateManyWithWhereWithoutJobListingInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type JobListingCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobListingCreateWithoutApplicationsInput, JobListingUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobListingCreateOrConnectWithoutApplicationsInput
    connect?: JobListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type JobListingUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobListingCreateWithoutApplicationsInput, JobListingUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobListingCreateOrConnectWithoutApplicationsInput
    upsert?: JobListingUpsertWithoutApplicationsInput
    connect?: JobListingWhereUniqueInput
    update?: XOR<XOR<JobListingUpdateToOneWithWhereWithoutApplicationsInput, JobListingUpdateWithoutApplicationsInput>, JobListingUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobListingCreateNestedOneWithoutMatchesInput = {
    create?: XOR<JobListingCreateWithoutMatchesInput, JobListingUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: JobListingCreateOrConnectWithoutMatchesInput
    connect?: JobListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchedWithInput = {
    create?: XOR<UserCreateWithoutMatchedWithInput, UserUncheckedCreateWithoutMatchedWithInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchedWithInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus
  }

  export type JobListingUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<JobListingCreateWithoutMatchesInput, JobListingUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: JobListingCreateOrConnectWithoutMatchesInput
    upsert?: JobListingUpsertWithoutMatchesInput
    connect?: JobListingWhereUniqueInput
    update?: XOR<XOR<JobListingUpdateToOneWithWhereWithoutMatchesInput, JobListingUpdateWithoutMatchesInput>, JobListingUncheckedUpdateWithoutMatchesInput>
  }

  export type UserUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    upsert?: UserUpsertWithoutMatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesInput, UserUpdateWithoutMatchesInput>, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type UserUpdateOneRequiredWithoutMatchedWithNestedInput = {
    create?: XOR<UserCreateWithoutMatchedWithInput, UserUncheckedCreateWithoutMatchedWithInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchedWithInput
    upsert?: UserUpsertWithoutMatchedWithInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchedWithInput, UserUpdateWithoutMatchedWithInput>, UserUncheckedUpdateWithoutMatchedWithInput>
  }

  export type JobListingCreateNestedOneWithoutChatsInput = {
    create?: XOR<JobListingCreateWithoutChatsInput, JobListingUncheckedCreateWithoutChatsInput>
    connectOrCreate?: JobListingCreateOrConnectWithoutChatsInput
    connect?: JobListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEmployerChatsInput = {
    create?: XOR<UserCreateWithoutEmployerChatsInput, UserUncheckedCreateWithoutEmployerChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployerChatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicantChatsInput = {
    create?: XOR<UserCreateWithoutApplicantChatsInput, UserUncheckedCreateWithoutApplicantChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicantChatsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type JobListingUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<JobListingCreateWithoutChatsInput, JobListingUncheckedCreateWithoutChatsInput>
    connectOrCreate?: JobListingCreateOrConnectWithoutChatsInput
    upsert?: JobListingUpsertWithoutChatsInput
    connect?: JobListingWhereUniqueInput
    update?: XOR<XOR<JobListingUpdateToOneWithWhereWithoutChatsInput, JobListingUpdateWithoutChatsInput>, JobListingUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateOneRequiredWithoutEmployerChatsNestedInput = {
    create?: XOR<UserCreateWithoutEmployerChatsInput, UserUncheckedCreateWithoutEmployerChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployerChatsInput
    upsert?: UserUpsertWithoutEmployerChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployerChatsInput, UserUpdateWithoutEmployerChatsInput>, UserUncheckedUpdateWithoutEmployerChatsInput>
  }

  export type UserUpdateOneRequiredWithoutApplicantChatsNestedInput = {
    create?: XOR<UserCreateWithoutApplicantChatsInput, UserUncheckedCreateWithoutApplicantChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicantChatsInput
    upsert?: UserUpsertWithoutApplicantChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicantChatsInput, UserUpdateWithoutApplicantChatsInput>, UserUncheckedUpdateWithoutApplicantChatsInput>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type NestedEnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    title?: string | null
    bio?: string | null
    skills?: ProfileCreateskillsInput | string[]
    experience?: NullableJsonNullValueInput | InputJsonValue
    education?: NullableJsonNullValueInput | InputJsonValue
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    bio?: string | null
    skills?: ProfileCreateskillsInput | string[]
    experience?: NullableJsonNullValueInput | InputJsonValue
    education?: NullableJsonNullValueInput | InputJsonValue
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ApplicationCreateWithoutApplicantInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListing: JobListingCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: string
    jobListingId: string
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateManyApplicantInputEnvelope = {
    data: ApplicationCreateManyApplicantInput | ApplicationCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type JobListingCreateWithoutEmployerInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutJobListingInput
    matches?: MatchCreateNestedManyWithoutJobListingInput
    chats?: ChatCreateNestedManyWithoutJobListingInput
  }

  export type JobListingUncheckedCreateWithoutEmployerInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobListingInput
    matches?: MatchUncheckedCreateNestedManyWithoutJobListingInput
    chats?: ChatUncheckedCreateNestedManyWithoutJobListingInput
  }

  export type JobListingCreateOrConnectWithoutEmployerInput = {
    where: JobListingWhereUniqueInput
    create: XOR<JobListingCreateWithoutEmployerInput, JobListingUncheckedCreateWithoutEmployerInput>
  }

  export type JobListingCreateManyEmployerInputEnvelope = {
    data: JobListingCreateManyEmployerInput | JobListingCreateManyEmployerInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutUserInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListing: JobListingCreateNestedOneWithoutMatchesInput
    matchedWith: UserCreateNestedOneWithoutMatchedWithInput
  }

  export type MatchUncheckedCreateWithoutUserInput = {
    id?: string
    jobListingId: string
    matchedWithId: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutUserInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput>
  }

  export type MatchCreateManyUserInputEnvelope = {
    data: MatchCreateManyUserInput | MatchCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutMatchedWithInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListing: JobListingCreateNestedOneWithoutMatchesInput
    user: UserCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutMatchedWithInput = {
    id?: string
    jobListingId: string
    userId: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutMatchedWithInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutMatchedWithInput, MatchUncheckedCreateWithoutMatchedWithInput>
  }

  export type MatchCreateManyMatchedWithInputEnvelope = {
    data: MatchCreateManyMatchedWithInput | MatchCreateManyMatchedWithInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutEmployerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListing: JobListingCreateNestedOneWithoutChatsInput
    applicant: UserCreateNestedOneWithoutApplicantChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutEmployerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListingId: string
    applicantId: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutEmployerInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutEmployerInput, ChatUncheckedCreateWithoutEmployerInput>
  }

  export type ChatCreateManyEmployerInputEnvelope = {
    data: ChatCreateManyEmployerInput | ChatCreateManyEmployerInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutApplicantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListing: JobListingCreateNestedOneWithoutChatsInput
    employer: UserCreateNestedOneWithoutEmployerChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutApplicantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListingId: string
    employerId: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutApplicantInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutApplicantInput, ChatUncheckedCreateWithoutApplicantInput>
  }

  export type ChatCreateManyApplicantInputEnvelope = {
    data: ChatCreateManyApplicantInput | ChatCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    read?: boolean
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    chatId: string
    read?: boolean
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: ProfileUpdateskillsInput | string[]
    experience?: NullableJsonNullValueInput | InputJsonValue
    education?: NullableJsonNullValueInput | InputJsonValue
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: ProfileUpdateskillsInput | string[]
    experience?: NullableJsonNullValueInput | InputJsonValue
    education?: NullableJsonNullValueInput | InputJsonValue
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    jobListingId?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    coverLetter?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type JobListingUpsertWithWhereUniqueWithoutEmployerInput = {
    where: JobListingWhereUniqueInput
    update: XOR<JobListingUpdateWithoutEmployerInput, JobListingUncheckedUpdateWithoutEmployerInput>
    create: XOR<JobListingCreateWithoutEmployerInput, JobListingUncheckedCreateWithoutEmployerInput>
  }

  export type JobListingUpdateWithWhereUniqueWithoutEmployerInput = {
    where: JobListingWhereUniqueInput
    data: XOR<JobListingUpdateWithoutEmployerInput, JobListingUncheckedUpdateWithoutEmployerInput>
  }

  export type JobListingUpdateManyWithWhereWithoutEmployerInput = {
    where: JobListingScalarWhereInput
    data: XOR<JobListingUpdateManyMutationInput, JobListingUncheckedUpdateManyWithoutEmployerInput>
  }

  export type JobListingScalarWhereInput = {
    AND?: JobListingScalarWhereInput | JobListingScalarWhereInput[]
    OR?: JobListingScalarWhereInput[]
    NOT?: JobListingScalarWhereInput | JobListingScalarWhereInput[]
    id?: StringFilter<"JobListing"> | string
    title?: StringFilter<"JobListing"> | string
    company?: StringFilter<"JobListing"> | string
    description?: StringFilter<"JobListing"> | string
    requirements?: StringNullableListFilter<"JobListing">
    location?: StringNullableFilter<"JobListing"> | string | null
    salary?: StringNullableFilter<"JobListing"> | string | null
    type?: EnumJobTypeFilter<"JobListing"> | $Enums.JobType
    employerId?: StringFilter<"JobListing"> | string
    createdAt?: DateTimeFilter<"JobListing"> | Date | string
    updatedAt?: DateTimeFilter<"JobListing"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUserInput, MatchUncheckedUpdateWithoutUserInput>
    create: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUserInput, MatchUncheckedUpdateWithoutUserInput>
  }

  export type MatchUpdateManyWithWhereWithoutUserInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    jobListingId?: StringFilter<"Match"> | string
    userId?: StringFilter<"Match"> | string
    matchedWithId?: StringFilter<"Match"> | string
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutMatchedWithInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutMatchedWithInput, MatchUncheckedUpdateWithoutMatchedWithInput>
    create: XOR<MatchCreateWithoutMatchedWithInput, MatchUncheckedCreateWithoutMatchedWithInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutMatchedWithInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutMatchedWithInput, MatchUncheckedUpdateWithoutMatchedWithInput>
  }

  export type MatchUpdateManyWithWhereWithoutMatchedWithInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutMatchedWithInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutEmployerInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutEmployerInput, ChatUncheckedUpdateWithoutEmployerInput>
    create: XOR<ChatCreateWithoutEmployerInput, ChatUncheckedCreateWithoutEmployerInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutEmployerInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutEmployerInput, ChatUncheckedUpdateWithoutEmployerInput>
  }

  export type ChatUpdateManyWithWhereWithoutEmployerInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutEmployerInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    jobListingId?: StringFilter<"Chat"> | string
    employerId?: StringFilter<"Chat"> | string
    applicantId?: StringFilter<"Chat"> | string
  }

  export type ChatUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutApplicantInput, ChatUncheckedUpdateWithoutApplicantInput>
    create: XOR<ChatCreateWithoutApplicantInput, ChatUncheckedCreateWithoutApplicantInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutApplicantInput, ChatUncheckedUpdateWithoutApplicantInput>
  }

  export type ChatUpdateManyWithWhereWithoutApplicantInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutApplicantInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chatId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    read?: BoolFilter<"Message"> | boolean
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingCreateNestedManyWithoutEmployerInput
    matches?: MatchCreateNestedManyWithoutUserInput
    matchedWith?: MatchCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatCreateNestedManyWithoutApplicantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingUncheckedCreateNestedManyWithoutEmployerInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchUncheckedCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatUncheckedCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatUncheckedCreateNestedManyWithoutApplicantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUpdateManyWithoutEmployerNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUpdateManyWithoutApplicantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUncheckedUpdateManyWithoutEmployerNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUncheckedUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUncheckedUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUncheckedUpdateManyWithoutApplicantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutJobListingsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    matches?: MatchCreateNestedManyWithoutUserInput
    matchedWith?: MatchCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatCreateNestedManyWithoutApplicantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutJobListingsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchUncheckedCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatUncheckedCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatUncheckedCreateNestedManyWithoutApplicantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutJobListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobListingsInput, UserUncheckedCreateWithoutJobListingsInput>
  }

  export type ApplicationCreateWithoutJobListingInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutJobListingInput = {
    id?: string
    applicantId: string
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutJobListingInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutJobListingInput, ApplicationUncheckedCreateWithoutJobListingInput>
  }

  export type ApplicationCreateManyJobListingInputEnvelope = {
    data: ApplicationCreateManyJobListingInput | ApplicationCreateManyJobListingInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutJobListingInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMatchesInput
    matchedWith: UserCreateNestedOneWithoutMatchedWithInput
  }

  export type MatchUncheckedCreateWithoutJobListingInput = {
    id?: string
    userId: string
    matchedWithId: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutJobListingInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutJobListingInput, MatchUncheckedCreateWithoutJobListingInput>
  }

  export type MatchCreateManyJobListingInputEnvelope = {
    data: MatchCreateManyJobListingInput | MatchCreateManyJobListingInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutJobListingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: UserCreateNestedOneWithoutEmployerChatsInput
    applicant: UserCreateNestedOneWithoutApplicantChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutJobListingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employerId: string
    applicantId: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutJobListingInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutJobListingInput, ChatUncheckedCreateWithoutJobListingInput>
  }

  export type ChatCreateManyJobListingInputEnvelope = {
    data: ChatCreateManyJobListingInput | ChatCreateManyJobListingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJobListingsInput = {
    update: XOR<UserUpdateWithoutJobListingsInput, UserUncheckedUpdateWithoutJobListingsInput>
    create: XOR<UserCreateWithoutJobListingsInput, UserUncheckedCreateWithoutJobListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobListingsInput, UserUncheckedUpdateWithoutJobListingsInput>
  }

  export type UserUpdateWithoutJobListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUpdateManyWithoutApplicantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutJobListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUncheckedUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUncheckedUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUncheckedUpdateManyWithoutApplicantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ApplicationUpsertWithWhereUniqueWithoutJobListingInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutJobListingInput, ApplicationUncheckedUpdateWithoutJobListingInput>
    create: XOR<ApplicationCreateWithoutJobListingInput, ApplicationUncheckedCreateWithoutJobListingInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutJobListingInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutJobListingInput, ApplicationUncheckedUpdateWithoutJobListingInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutJobListingInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutJobListingInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutJobListingInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutJobListingInput, MatchUncheckedUpdateWithoutJobListingInput>
    create: XOR<MatchCreateWithoutJobListingInput, MatchUncheckedCreateWithoutJobListingInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutJobListingInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutJobListingInput, MatchUncheckedUpdateWithoutJobListingInput>
  }

  export type MatchUpdateManyWithWhereWithoutJobListingInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutJobListingInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutJobListingInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutJobListingInput, ChatUncheckedUpdateWithoutJobListingInput>
    create: XOR<ChatCreateWithoutJobListingInput, ChatUncheckedCreateWithoutJobListingInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutJobListingInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutJobListingInput, ChatUncheckedUpdateWithoutJobListingInput>
  }

  export type ChatUpdateManyWithWhereWithoutJobListingInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutJobListingInput>
  }

  export type JobListingCreateWithoutApplicationsInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: UserCreateNestedOneWithoutJobListingsInput
    matches?: MatchCreateNestedManyWithoutJobListingInput
    chats?: ChatCreateNestedManyWithoutJobListingInput
  }

  export type JobListingUncheckedCreateWithoutApplicationsInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    employerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutJobListingInput
    chats?: ChatUncheckedCreateNestedManyWithoutJobListingInput
  }

  export type JobListingCreateOrConnectWithoutApplicationsInput = {
    where: JobListingWhereUniqueInput
    create: XOR<JobListingCreateWithoutApplicationsInput, JobListingUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    jobListings?: JobListingCreateNestedManyWithoutEmployerInput
    matches?: MatchCreateNestedManyWithoutUserInput
    matchedWith?: MatchCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatCreateNestedManyWithoutApplicantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    jobListings?: JobListingUncheckedCreateNestedManyWithoutEmployerInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchUncheckedCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatUncheckedCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatUncheckedCreateNestedManyWithoutApplicantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type JobListingUpsertWithoutApplicationsInput = {
    update: XOR<JobListingUpdateWithoutApplicationsInput, JobListingUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobListingCreateWithoutApplicationsInput, JobListingUncheckedCreateWithoutApplicationsInput>
    where?: JobListingWhereInput
  }

  export type JobListingUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobListingWhereInput
    data: XOR<JobListingUpdateWithoutApplicationsInput, JobListingUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobListingUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: UserUpdateOneRequiredWithoutJobListingsNestedInput
    matches?: MatchUpdateManyWithoutJobListingNestedInput
    chats?: ChatUpdateManyWithoutJobListingNestedInput
  }

  export type JobListingUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    employerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutJobListingNestedInput
    chats?: ChatUncheckedUpdateManyWithoutJobListingNestedInput
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    jobListings?: JobListingUpdateManyWithoutEmployerNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUpdateManyWithoutApplicantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    jobListings?: JobListingUncheckedUpdateManyWithoutEmployerNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUncheckedUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUncheckedUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUncheckedUpdateManyWithoutApplicantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type JobListingCreateWithoutMatchesInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: UserCreateNestedOneWithoutJobListingsInput
    applications?: ApplicationCreateNestedManyWithoutJobListingInput
    chats?: ChatCreateNestedManyWithoutJobListingInput
  }

  export type JobListingUncheckedCreateWithoutMatchesInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    employerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobListingInput
    chats?: ChatUncheckedCreateNestedManyWithoutJobListingInput
  }

  export type JobListingCreateOrConnectWithoutMatchesInput = {
    where: JobListingWhereUniqueInput
    create: XOR<JobListingCreateWithoutMatchesInput, JobListingUncheckedCreateWithoutMatchesInput>
  }

  export type UserCreateWithoutMatchesInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingCreateNestedManyWithoutEmployerInput
    matchedWith?: MatchCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatCreateNestedManyWithoutApplicantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutMatchesInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingUncheckedCreateNestedManyWithoutEmployerInput
    matchedWith?: MatchUncheckedCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatUncheckedCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatUncheckedCreateNestedManyWithoutApplicantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutMatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
  }

  export type UserCreateWithoutMatchedWithInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingCreateNestedManyWithoutEmployerInput
    matches?: MatchCreateNestedManyWithoutUserInput
    employerChats?: ChatCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatCreateNestedManyWithoutApplicantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutMatchedWithInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingUncheckedCreateNestedManyWithoutEmployerInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    employerChats?: ChatUncheckedCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatUncheckedCreateNestedManyWithoutApplicantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutMatchedWithInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchedWithInput, UserUncheckedCreateWithoutMatchedWithInput>
  }

  export type JobListingUpsertWithoutMatchesInput = {
    update: XOR<JobListingUpdateWithoutMatchesInput, JobListingUncheckedUpdateWithoutMatchesInput>
    create: XOR<JobListingCreateWithoutMatchesInput, JobListingUncheckedCreateWithoutMatchesInput>
    where?: JobListingWhereInput
  }

  export type JobListingUpdateToOneWithWhereWithoutMatchesInput = {
    where?: JobListingWhereInput
    data: XOR<JobListingUpdateWithoutMatchesInput, JobListingUncheckedUpdateWithoutMatchesInput>
  }

  export type JobListingUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: UserUpdateOneRequiredWithoutJobListingsNestedInput
    applications?: ApplicationUpdateManyWithoutJobListingNestedInput
    chats?: ChatUpdateManyWithoutJobListingNestedInput
  }

  export type JobListingUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    employerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobListingNestedInput
    chats?: ChatUncheckedUpdateManyWithoutJobListingNestedInput
  }

  export type UserUpsertWithoutMatchesInput = {
    update: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type UserUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUpdateManyWithoutEmployerNestedInput
    matchedWith?: MatchUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUpdateManyWithoutApplicantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUncheckedUpdateManyWithoutEmployerNestedInput
    matchedWith?: MatchUncheckedUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUncheckedUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUncheckedUpdateManyWithoutApplicantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutMatchedWithInput = {
    update: XOR<UserUpdateWithoutMatchedWithInput, UserUncheckedUpdateWithoutMatchedWithInput>
    create: XOR<UserCreateWithoutMatchedWithInput, UserUncheckedCreateWithoutMatchedWithInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchedWithInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchedWithInput, UserUncheckedUpdateWithoutMatchedWithInput>
  }

  export type UserUpdateWithoutMatchedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUpdateManyWithoutEmployerNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    employerChats?: ChatUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUpdateManyWithoutApplicantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUncheckedUpdateManyWithoutEmployerNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    employerChats?: ChatUncheckedUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUncheckedUpdateManyWithoutApplicantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type JobListingCreateWithoutChatsInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: UserCreateNestedOneWithoutJobListingsInput
    applications?: ApplicationCreateNestedManyWithoutJobListingInput
    matches?: MatchCreateNestedManyWithoutJobListingInput
  }

  export type JobListingUncheckedCreateWithoutChatsInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    employerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobListingInput
    matches?: MatchUncheckedCreateNestedManyWithoutJobListingInput
  }

  export type JobListingCreateOrConnectWithoutChatsInput = {
    where: JobListingWhereUniqueInput
    create: XOR<JobListingCreateWithoutChatsInput, JobListingUncheckedCreateWithoutChatsInput>
  }

  export type UserCreateWithoutEmployerChatsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingCreateNestedManyWithoutEmployerInput
    matches?: MatchCreateNestedManyWithoutUserInput
    matchedWith?: MatchCreateNestedManyWithoutMatchedWithInput
    applicantChats?: ChatCreateNestedManyWithoutApplicantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutEmployerChatsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingUncheckedCreateNestedManyWithoutEmployerInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchUncheckedCreateNestedManyWithoutMatchedWithInput
    applicantChats?: ChatUncheckedCreateNestedManyWithoutApplicantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutEmployerChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployerChatsInput, UserUncheckedCreateWithoutEmployerChatsInput>
  }

  export type UserCreateWithoutApplicantChatsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingCreateNestedManyWithoutEmployerInput
    matches?: MatchCreateNestedManyWithoutUserInput
    matchedWith?: MatchCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatCreateNestedManyWithoutEmployerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutApplicantChatsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingUncheckedCreateNestedManyWithoutEmployerInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchUncheckedCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatUncheckedCreateNestedManyWithoutEmployerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutApplicantChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicantChatsInput, UserUncheckedCreateWithoutApplicantChatsInput>
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    content: string
    createdAt?: Date | string
    read?: boolean
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderId: string
    read?: boolean
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type JobListingUpsertWithoutChatsInput = {
    update: XOR<JobListingUpdateWithoutChatsInput, JobListingUncheckedUpdateWithoutChatsInput>
    create: XOR<JobListingCreateWithoutChatsInput, JobListingUncheckedCreateWithoutChatsInput>
    where?: JobListingWhereInput
  }

  export type JobListingUpdateToOneWithWhereWithoutChatsInput = {
    where?: JobListingWhereInput
    data: XOR<JobListingUpdateWithoutChatsInput, JobListingUncheckedUpdateWithoutChatsInput>
  }

  export type JobListingUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: UserUpdateOneRequiredWithoutJobListingsNestedInput
    applications?: ApplicationUpdateManyWithoutJobListingNestedInput
    matches?: MatchUpdateManyWithoutJobListingNestedInput
  }

  export type JobListingUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    employerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobListingNestedInput
    matches?: MatchUncheckedUpdateManyWithoutJobListingNestedInput
  }

  export type UserUpsertWithoutEmployerChatsInput = {
    update: XOR<UserUpdateWithoutEmployerChatsInput, UserUncheckedUpdateWithoutEmployerChatsInput>
    create: XOR<UserCreateWithoutEmployerChatsInput, UserUncheckedCreateWithoutEmployerChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployerChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployerChatsInput, UserUncheckedUpdateWithoutEmployerChatsInput>
  }

  export type UserUpdateWithoutEmployerChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUpdateManyWithoutEmployerNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUpdateManyWithoutMatchedWithNestedInput
    applicantChats?: ChatUpdateManyWithoutApplicantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployerChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUncheckedUpdateManyWithoutEmployerNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUncheckedUpdateManyWithoutMatchedWithNestedInput
    applicantChats?: ChatUncheckedUpdateManyWithoutApplicantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutApplicantChatsInput = {
    update: XOR<UserUpdateWithoutApplicantChatsInput, UserUncheckedUpdateWithoutApplicantChatsInput>
    create: XOR<UserCreateWithoutApplicantChatsInput, UserUncheckedCreateWithoutApplicantChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicantChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicantChatsInput, UserUncheckedUpdateWithoutApplicantChatsInput>
  }

  export type UserUpdateWithoutApplicantChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUpdateManyWithoutEmployerNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUpdateManyWithoutEmployerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicantChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUncheckedUpdateManyWithoutEmployerNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUncheckedUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUncheckedUpdateManyWithoutEmployerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListing: JobListingCreateNestedOneWithoutChatsInput
    employer: UserCreateNestedOneWithoutEmployerChatsInput
    applicant: UserCreateNestedOneWithoutApplicantChatsInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListingId: string
    employerId: string
    applicantId: string
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingCreateNestedManyWithoutEmployerInput
    matches?: MatchCreateNestedManyWithoutUserInput
    matchedWith?: MatchCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatCreateNestedManyWithoutApplicantInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    jobListings?: JobListingUncheckedCreateNestedManyWithoutEmployerInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchUncheckedCreateNestedManyWithoutMatchedWithInput
    employerChats?: ChatUncheckedCreateNestedManyWithoutEmployerInput
    applicantChats?: ChatUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListing?: JobListingUpdateOneRequiredWithoutChatsNestedInput
    employer?: UserUpdateOneRequiredWithoutEmployerChatsNestedInput
    applicant?: UserUpdateOneRequiredWithoutApplicantChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    employerId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUpdateManyWithoutEmployerNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUpdateManyWithoutApplicantNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    jobListings?: JobListingUncheckedUpdateManyWithoutEmployerNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchUncheckedUpdateManyWithoutMatchedWithNestedInput
    employerChats?: ChatUncheckedUpdateManyWithoutEmployerNestedInput
    applicantChats?: ChatUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicationCreateManyApplicantInput = {
    id?: string
    jobListingId: string
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobListingCreateManyEmployerInput = {
    id?: string
    title: string
    company: string
    description: string
    requirements?: JobListingCreaterequirementsInput | string[]
    location?: string | null
    salary?: string | null
    type: $Enums.JobType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyUserInput = {
    id?: string
    jobListingId: string
    matchedWithId: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyMatchedWithInput = {
    id?: string
    jobListingId: string
    userId: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateManyEmployerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListingId: string
    applicantId: string
  }

  export type ChatCreateManyApplicantInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobListingId: string
    employerId: string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    chatId: string
    read?: boolean
  }

  export type ApplicationUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListing?: JobListingUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobListingUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutJobListingNestedInput
    matches?: MatchUpdateManyWithoutJobListingNestedInput
    chats?: ChatUpdateManyWithoutJobListingNestedInput
  }

  export type JobListingUncheckedUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobListingNestedInput
    matches?: MatchUncheckedUpdateManyWithoutJobListingNestedInput
    chats?: ChatUncheckedUpdateManyWithoutJobListingNestedInput
  }

  export type JobListingUncheckedUpdateManyWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobListingUpdaterequirementsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListing?: JobListingUpdateOneRequiredWithoutMatchesNestedInput
    matchedWith?: UserUpdateOneRequiredWithoutMatchedWithNestedInput
  }

  export type MatchUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    matchedWithId?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    matchedWithId?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutMatchedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListing?: JobListingUpdateOneRequiredWithoutMatchesNestedInput
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutMatchedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutMatchedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListing?: JobListingUpdateOneRequiredWithoutChatsNestedInput
    applicant?: UserUpdateOneRequiredWithoutApplicantChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListing?: JobListingUpdateOneRequiredWithoutChatsNestedInput
    employer?: UserUpdateOneRequiredWithoutEmployerChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    employerId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobListingId?: StringFieldUpdateOperationsInput | string
    employerId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationCreateManyJobListingInput = {
    id?: string
    applicantId: string
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyJobListingInput = {
    id?: string
    userId: string
    matchedWithId: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateManyJobListingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employerId: string
    applicantId: string
  }

  export type ApplicationUpdateWithoutJobListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutJobListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutJobListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutJobListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
    matchedWith?: UserUpdateOneRequiredWithoutMatchedWithNestedInput
  }

  export type MatchUncheckedUpdateWithoutJobListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedWithId?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutJobListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedWithId?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutJobListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: UserUpdateOneRequiredWithoutEmployerChatsNestedInput
    applicant?: UserUpdateOneRequiredWithoutApplicantChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutJobListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employerId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutJobListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employerId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    content: string
    createdAt?: Date | string
    senderId: string
    read?: boolean
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}