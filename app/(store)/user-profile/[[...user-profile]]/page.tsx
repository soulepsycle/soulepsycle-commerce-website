import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => {

	return (
		<section className='flex min-h-screen items-center justify-center'>
			<UserProfile path="/user-profile" />
		</section>
	)
}

export default UserProfilePage