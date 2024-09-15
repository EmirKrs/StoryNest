export const getHeaderAlignment = (title:string) => {
    const maxLength = 20;
    return title.length > maxLength ? 'left': 'center';
};

export const getHeaderFontSize = (title:string) => {
    const maxLength = 20;
    return title.length > maxLength ? 22: 26;
};