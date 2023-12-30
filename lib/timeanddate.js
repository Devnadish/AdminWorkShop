export function getTimeElapsed(dateString) {
    // Convert the date string to a Date object
    const date = new Date(dateString);

    // Get the current date and time
    const now = new Date();

    // Calculate the time difference in milliseconds
    const diff = now - date;

    // Convert the time difference to minutes, hours, and days
    const minutes = Math.floor(diff / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Return the formatted string
    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
    } else {
        return 'Just now';
    }
}
