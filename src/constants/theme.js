import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const COLORS = {
    white: "#ffffff",
    black: "#000000",
    red: "red",
    green: '#60D669',
    primary: "#2F75FD",
    background: "#FFFFFF",
    linear: "#CDE1FF",
    offwhite: "#FAF9F6",
    grey: "#F8FCFF",
    purple: "purple"

};

export const SIZES = {
    //global sizes
    base: screenHeight * 0.01,
    font: screenHeight * 0.0175,
    radius: 5,
    padding: screenHeight * 0.03,

    // font sizes
    navTitle: screenHeight * 0.04375,
    h1: screenHeight * 0.0375,
    h2: screenHeight * 0.0275,
    h2a: screenHeight * 0.0340,
    h2c: screenHeight * 0.0245,
    h3: screenHeight * 0.0225,
    h3a: screenHeight * 0.0235,
    h4: screenHeight * 0.0175,
    h5: screenHeight * 0.015,
    body1: screenHeight * 0.0355,
    body2: screenHeight * 0.025,
    body3: screenHeight * 0.02,
    body3a: screenHeight * 0.02,
    body3b: screenHeight * 0.022,
    body4: screenHeight * 0.0175,
    body5: screenHeight * 0.015,
    body6: screenHeight * 0.012,
    intro: screenHeight * 0.04,

    // app dimensions
    width,
    height,
};

export const FONTS = {
    navTitle: { fontFamily: 'GeneralSans-Regular', fontSize: SIZES.navTitle },
    largeTitleBold: {
        fontFamily: 'GeneralSans-Regular',
        fontSize: SIZES.h1 * 1.5,
        lineHeight: screenHeight * 0.05,
        color: COLORS.black,
    },
    h1: {
        fontFamily: 'GeneralSans-Bold',
        fontSize: SIZES.h1,
        lineHeight: screenHeight * 0.05,
        fontWeight: 'bold',
        color: COLORS.black,
    },
    h2: {
        fontFamily: 'Urbanist-Bold',
        fontSize: SIZES.h2,
        lineHeight: screenHeight * 0.0375,
        color: COLORS.black,
    },
    h3: {
        fontFamily: 'Urbanist-Bold',
        fontSize: SIZES.h3,
        lineHeight: screenHeight * 0.025,
        color: COLORS.black,
        fontWeight: 'bold',
    },
    h3a: {
        fontFamily: 'Urbanist-Bold',
        fontSize: SIZES.h3a,
        lineHeight: screenHeight * 0.025,
        color: COLORS.black,
        fontWeight: 'bold',

    },
    h4: {
        fontFamily: 'Urbanist-Bold',
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        lineHeight: screenHeight * 0.025,
        color: COLORS.black,
    },
    h5: {
        fontFamily: 'Urbanist-Bold',
        fontSize: SIZES.h5,
        lineHeight: screenHeight * 0.025,
        color: COLORS.black,
    },
    // BODY
    body: {
        fontFamily: 'Urbanist-Medium',
        fontSize: SIZES.body1 * 1.2,
        lineHeight: 39,
        color: COLORS.black,
    },
    body1: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body1,
        lineHeight: 36,
        color: COLORS.black,
    },
    body1a: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body1 * 0.9,
        lineHeight: 30,
        color: COLORS.black,
    },
    body2: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body2,
        lineHeight: 30,
        color: COLORS.black,
    },
    body2a: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body2 * 0.95,
        lineHeight: 30,
        color: COLORS.black,
    }, body2b: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body2 * 0.935,
        lineHeight: 30,
        color: COLORS.black,
    }, body2c: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body2 * 1.3,
        lineHeight: 30,
        color: COLORS.black,
    },
    body3: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body3 * 1.05,
        lineHeight: 18,
        color: COLORS.black,
    }, body3a: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body3a,
        lineHeight: 18,
        color: COLORS.black,
    }, body3b: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body3b,
        lineHeight: 18,
        color: COLORS.black,
    },
    body4: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body4,
        lineHeight: 18,
        color: COLORS.black,
    },
    body5: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body5,
        lineHeight: 18,
        color: COLORS.black,
    },
    body6: {
        fontFamily: 'Urbanist-Regular',
        fontSize: SIZES.body6 * 1.2,
        lineHeight: 18,
        color: COLORS.black,
    },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;