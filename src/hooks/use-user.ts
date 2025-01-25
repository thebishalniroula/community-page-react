import { Author } from '@/db/posts'

// Get the current user
const useUser = (): Author | null => {
    // Mock user
    return {
        avatar: '/avatar.png',
        id: '101',
        name: 'John Doe',
    }
}

export default useUser
