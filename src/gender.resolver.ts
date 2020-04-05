import { Args, Query, Resolver } from '@nestjs/graphql';

enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}

@Resolver('Gender')
export class GenderResolver {
  MALE: Gender.MALE;
  FEMALE: Gender.FEMALE;

  @Query()
  negate(@Args('gender') gender: Gender) {
    console.log(gender); // get 'MALE' or 'FEMALE', expects 'male' or 'female'

    switch (gender) {
      case Gender.MALE:
        console.log('Gender.MALE going Gender.FEMALE');

        return Gender.FEMALE;

      case Gender.FEMALE:
        console.log('Gender.FEMALE going Gender.MALE');

        return Gender.MALE;
    }

    return null;
  }
}
