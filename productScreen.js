import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from "react-native";
import data from '../data/products.json';
import productImages from '../data/productImages';

const screenWidth = Dimensions.get("window").width;

class ProductsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        this.setState({ products: data.slice(0, 5) }); // show only 5 products
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Products</Text>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContainer}
                    data={this.state.products}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.productContainer}>
                            <Image
                                style={styles.productImage}
                                source={productImages[item.image]}
                            />
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productPrice}>${item.price}</Text>
                            <Text style={styles.productDescription}>{item.description}</Text>
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={0.8}
                                onPress={() => alert(`Clicked ${item.name}`)}
                            >
                                <Text style={styles.buttonText}>Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f2f5",
        paddingVertical: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#222",
    },
    flatListContainer: {
        paddingHorizontal: 20,
        justifyContent: "space-between",
        width: screenWidth - 40, // ensures 5 cards fit evenly
    },
    productContainer: {
        backgroundColor: "#fff",
        borderRadius: 18,
        width: 200,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 6,
    },
    productImage: {
        width: 180,
        height: 180,
        borderRadius: 15,
        alignSelf: "center",
        marginBottom: 12,
    },
    productName: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        color: "#111",
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        color: "#007bff",
        marginBottom: 6,
    },
    productDescription: {
        fontSize: 13,
        color: "#666",
        textAlign: "center",
        marginBottom: 12,
    },
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        borderRadius: 10,
        shadowColor: "#007bff",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default ProductsScreen;
