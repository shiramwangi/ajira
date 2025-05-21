import { JobListing, User, Profile, Application, Match } from '@prisma/client'

export type JobListingWithRelations = JobListing & {
  employer: User
  applications: Application[]
  matches: Match[]
}

export type UserWithRelations = User & {
  profile: Profile | null
  applications: Application[]
  jobListings: JobListing[]
  matches: Match[]
  matchedWith: Match[]
}

export type ProfileWithRelations = Profile & {
  user: User
}

export type ApplicationWithRelations = Application & {
  jobListing: JobListing
  applicant: User
}

export type MatchWithRelations = Match & {
  jobListing: JobListing
  user: User
  matchedWith: User
} 