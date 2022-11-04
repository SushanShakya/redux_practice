import { View, ScrollView, Text, StatusBar } from 'react-native'
import default_view_styles from '../../../../core/styles/default_view_styles'
import UserViewModel from '../view_model/user_view_model'

let HomeView = () => {
    return (
        <View style={default_view_styles.screen}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content"
                translucent={true} />
            <ListingWidget data={[new UserViewModel("Sushan", "", "sushan@invictaworld.com")]}></ListingWidget>
        </View>

    )
}

let ListingWidget = (props) => (
    <ScrollView style={{ flexGrow: 1 }}>
        {Array.from(Array(props.data.length).keys()).map(e => (
            <Card isFirst={e == 0} isNotLast={e != 9} data={props.data[e]}></Card>
        ))}
    </ScrollView>
)

let Card = (props) => (
    <View style={{ marginHorizontal: 16 }}>
        {props.isFirst && <View style={{ height: 20 }}></View>}

        <View style={[{ ...default_view_styles.card, flexDirection: "row", alignItems: 'center' }, default_view_styles.shadow]}>
            <Image url={props.data.avatar} />
            <View style={{ width: 16 }}></View>
            <View style={{ flexGrow: 1 }}>
                <Text style={default_view_styles.title}>{props.data.name}</Text>
                <Text style={default_view_styles.text}>{props.data.email}</Text>
            </View>
        </View>

        {props.isNotLast && <View style={default_view_styles.sizedbox10h}></View>}
    </View>
)

let Image = () => (
    <View style={default_view_styles.imageContainer}>
    </View>
)

export default HomeView