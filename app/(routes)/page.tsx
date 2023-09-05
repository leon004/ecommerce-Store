import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;
const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("f4558167-5140-43be-8116-89d790a73be4");
    return(
        <Container>
            <div>
            <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
}

export default HomePage;

