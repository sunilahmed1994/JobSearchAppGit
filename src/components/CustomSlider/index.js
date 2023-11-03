import * as React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { userImage1,userImage2,userImage3,userImage4,userImage5 } from '../../services/utilities/assets';
function MyImageCarousel() {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    // Define an array of image sources
    const images = [
        userImage1,
        userImage2,
        userImage3,
        userImage4,
        userImage5
    ];

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={height}
                // autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            source={item}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'cover',
                            }}
                        />
                    </View>
                )}
            />
        </View>
    );
}

export default MyImageCarousel;
