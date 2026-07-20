import { useEffect } from 'react';
import UsersProfileCard from './components/UserProfileCard';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { ClearUserProfile, getProfileUser } from '../../redux/ProfileSlice';
import LoadingCard from './components/ui/shared/Loading';
import Error from './components/ui/shared/Error';
import UsersProfileInventory from './components/UserProfileInvenory';
import HasmoreCase from './components/ui/shared/Hasmore';

export default function UsersProfilePage() {
  const dispatch = useDispatch<AppDispatch>();
  const profileUserStatus = useSelector(
    (state: RootState) => state.caseTestTs.profileUserStatus
  );
  const hasMore = useSelector((state: RootState) => state.caseTestTs.hasMore);

  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (id) {
      dispatch(getProfileUser(id));
    }
    return () => {
      dispatch(ClearUserProfile());
    };
  }, [id]);

  if (profileUserStatus === 'error') {
    return <Error></Error>;
  }
  if (profileUserStatus === 'loading') {
    return <LoadingCard></LoadingCard>;
  }
  return (
    <div className=' max-w-[1086px] justify-center  flex-col mx-auto flex p-4'>
      <UsersProfileCard></UsersProfileCard>
      <UsersProfileInventory></UsersProfileInventory>
      <div className='flex justify-center items-center'>
        {hasMore && id && <HasmoreCase id={id} />}
      </div>
    </div>
  );
}
