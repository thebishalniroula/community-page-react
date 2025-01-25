// Get initials of a user
export function getInitials(name: string) {
    const initials = name.split(' ')[0].charAt(0).toUpperCase()
    return initials
}
