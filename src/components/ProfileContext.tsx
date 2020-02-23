import React, { useReducer, createContext, useContext, useEffect } from 'react';
import store from 'store';
import { Donor } from '../../server/src/types';

export enum BloodType {
    Ominus,
    Oplus,
    Aminus,
    Aplus,
    Bminus,
    Bplus,
    ABminus,
    ABplus
  }
  

export const SIDEBAR_COLLAPSED = 'df.colapsed';

type SidebarProfileState = {
  inited: boolean,
  profile?: Donor
};

type SidebarProfileAction = {
  type: 'reload' | 'set' | 'forget' | 'forgetExact',
  profile?: Donor
};

function reducer (state: SidebarProfileState, action: SidebarProfileAction): SidebarProfileState {
  let profile: Donor | undefined;

  switch (action.type) {
    case 'reload':
      console.log('Reload profile:', profile);
      return { ...state, profile, inited: true };

    case 'set':
      profile = action.profile;
      if (profile !== state.profile) {
        console.log('Set new profile:', profile);
        store.set(SIDEBAR_COLLAPSED, profile);
        return { ...state, profile, inited: true };
      }
      return state;

    default:
      throw new Error('No action type provided');
  }
}

function functionStub () {
  throw new Error('Function needs to be set in SidebarProfileProvider');
}

const initialState: any = {
  inited: false,
  profile: {
    profile: {
        fullName: 'Мельничук Олег Валерійович',
        email: 'oleh.melnechyk@gmail.com',
        phoneNumber: '+380978974820',
        bloodType: BloodType.ABminus
    }},
  trigerFollowed: false
};

export type SidebarProfileContextProps = {
  state: SidebarProfileState,
  dispatch: React.Dispatch<SidebarProfileAction>,
  set: (profile: Donor) => void
};

const contextStub: SidebarProfileContextProps = {
  state: initialState,
  dispatch: functionStub,
  set: functionStub
};

export const SidebarProfileContext = createContext<SidebarProfileContextProps>(contextStub);

export function SidebarProfileProvider (props: React.PropsWithChildren<{}>) {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.inited) {
      dispatch({ type: 'reload' });
    }
  }, [ state.inited ]); // Don't call this effect if `invited` is not changed

  const contextValue = {
    state,
    dispatch,
    set: (profile: Donor) => dispatch({ type: 'set', profile: profile})
  };
  return (
    <SidebarProfileContext.Provider value={contextValue}>
      {props.children}
    </SidebarProfileContext.Provider>
  );
}

export function useSidebarProfile () {
  return useContext(SidebarProfileContext);
}

export default SidebarProfileProvider;

export const useGetMyProfile = () => {
    return {
        profile: {
            fullName: 'Мельничук Олег Валерійович',
            email: 'oleh.melnechyk@gmail.com',
            phoneNumber: '+380978974820',
            bloodType: BloodType.ABminus
    } as unknown as Donor};
}  