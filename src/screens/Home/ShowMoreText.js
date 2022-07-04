import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class ShowMoreText extends React.PureComponent {
  static defaultProps = {
    maxLine: 2,
    lineHeight: 14,
    style: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      showMore: false,
      maxLine: props.maxLine,
    };
  }

  onPressShowMore = () => {
    const { showMore } = this.state;
    this.setState({
      showMore: !showMore,
      maxLine: !showMore ? this.props.maxLine : 0,
    });
  };

  onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    const { lineHeight } = this.props;
    const { maxLine } = this.state;
    const maxHeight = maxLine * lineHeight;

    if (maxLine > 0 && height > maxHeight) {
      this.setState({ showMore: true });
    }
  };

  render() {
    const { content, maxLine, navigation } = this.props;
    const { showMore } = this.state;

    return (
      <View style={this.props.style}>
        <Text
          style={{ fontSize: 13, color: "#777" }}
          numberOfLines={showMore ? maxLine : 0}
          ellipsizeMode="tail"
          onLayout={(event) => this.onLayout(event)}
        >
          {content}
        </Text>
        {
          <TouchableOpacity onPress={this.onPressShowMore}>
            <Text
              style={styles.textShowMore}
              onPress={() =>
                navigation.navigate("Details", {
                  id: this.props.id,
                })
              }
            >
              {showMore ? "... show more" : "Show Less"}
            </Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
  },
  textShowMore: {
    color: "blue",
    marginTop: 4,
    fontSize: 12,
  },
});
