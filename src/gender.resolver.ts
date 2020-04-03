import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Gender } from './graphql';

@Resolver('Gender')
export class GenderResolver {
  @ResolveField(Gender.MALE)
  getMale() {
    return 'male';
  }

  @ResolveField(Gender.FEMALE)
  getFemale() {
    return 'female';
  }

  @Query()
  negate(@Args('gender') gender: Gender): Gender {
    console.log(gender);

    switch (gender) {
      case Gender.MALE:
        return Gender.FEMALE;

      case Gender.FEMALE:
        return Gender.MALE;
    }

    return null;
  }
}
