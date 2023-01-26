
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';
import { assets, COLORS, SHADOWS, SIZES } from '../constants';
import { CircleButton } from './Button';
import { SubInfo } from './SubInfo';
const NFTCard = ({ data }) => {
    const navigation = useNavigation();

    // const
    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <View style={{ width: "100%", height: 250 }}>
                <Image
                    source={data.image}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopRightRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />

                <CircleButton
                    imgUrl={assets.heart}
                    right={10}
                    top={10}
                // handlePress={}
                />
            </View>
            <SubInfo />
        </View>
    )
}

export default NFTCard