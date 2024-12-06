export function toTitleCase(input: string): string {
    try {
        return input
            .split(/[-_]/) // Split by hyphens or underscores
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
            .join(' '); // Join with a space
    } catch (error) {
        console.error(error);
        return input;
    }
}