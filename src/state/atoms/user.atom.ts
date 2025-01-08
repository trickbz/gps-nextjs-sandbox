import {atom} from 'recoil';

import {User} from '@/types/band.types';

export const userState = atom<User>({
  key: 'userAtom',
  default: {
    firstName: '',
    lastName: '',
    loggedIn: false,
    email: '',
  },
});
