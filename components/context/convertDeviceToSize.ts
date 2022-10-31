export const convertDeviceToSize = (device: string) => {

    let screenWidth: {
        minWidth: string;
        width: string;
        maxWidth: string;
    } = {
        minWidth: '',
        width: '',
        maxWidth: ''
    }

    switch (device) {
        case 'phone': {
            screenWidth.minWidth = '320px'
            screenWidth.width = '100%'
            screenWidth.maxWidth = '429px'
            break;
        }
        case 'tablet': {
            screenWidth.minWidth = '430px'
            screenWidth.width = '100%'
            screenWidth.maxWidth = '800px'
            break;
        }
        case 'laptop': {
            screenWidth.minWidth = '801px'
            screenWidth.width = '100%'
            screenWidth.maxWidth = '1600px'
            break;
        }
        case 'desktop': {
            screenWidth.minWidth = '1601px'
            screenWidth.width = '100%'
            screenWidth.maxWidth = '100%'
            break;
        }
        default: {
            screenWidth.minWidth = ''
            screenWidth.width = ''
            screenWidth.maxWidth = ''
        }

    }

    return screenWidth
}
