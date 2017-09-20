//Add helper functions here.
export const maybeTrimTitle = (string) => (
    string.length > 100 ? string.substring(0, 100) + '...' : string
)
