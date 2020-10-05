import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View,
} from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class PostCards extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          {[...Array(50)].map((val, key) => {
            return (
              <Card transparent style={styles.card}>
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={{
                        uri:
                          "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-1/p160x160/93290846_2372442613055651_2351103297269530624_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_eui2=AeGzcphZhX93sN4j8bbKfetUHXgAR4Lzu50deABHgvO7nSc9kdKkYyVPWpOl7Ft62xtQq42xZxmB10sa1QO5j7hi&_nc_ohc=B1J_n_EJTocAX-XLg8L&_nc_ht=scontent.fmnl4-1.fna&tp=6&oh=c1a3587d281e5f85e2526eecc6fcd685&oe=5F9AA16B",
                      }}
                    />
                    <Body>
                      <Text>Krismarie V. Castillo</Text>
                      <Text note>1 hour ago</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        "https://scontent.fmnl13-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p180x540/103869866_23844864678100334_7261081080962594040_n.png.jpg?_nc_cat=100&_nc_sid=67cdda&_nc_eui2=AeE5hDg8QaVPLm9Sj17X67R25owI-8ySX_fmjAj7zJJf9x4Ahtw10osLTnEJiKdq5CELYl17re3iYY1renDcZuYn&_nc_ohc=VAw7Nt40uH0AX-aewA8&_nc_ht=scontent.fmnl13-1.fna&oh=0768386bafcd727151d30cb6fcbb2050&oe=5F9DEE17",
                    }}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem>
                  <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <Icon name="thumbs-up" style={styles.icon} />
                          <Text style={styles.socialBarLabel}>78</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <Icon name="chatbubbles" style={styles.icon} />
                          <Text style={styles.socialBarLabel}>25</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <Icon name="share-alt" style={styles.icon} />
                          <Text
                            rkType="primary4 hintColor"
                            style={styles.socialBarLabel}
                          >
                            13
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </CardItem>
              </Card>
            );
          })}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6E6",
  },
  list: {
    backgroundColor: "#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    elevation: 0,
    shadowColor: "#00000021",
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  time: {
    fontSize: 13,
    color: "#808080",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
