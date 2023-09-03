import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

export const revalidate = 0;
const HomePage = async () => {
    const billboard = await getBillboard("f4558167-5140-43be-8116-89d790a73be4");
    return(
        <Container>
            <div>
            <Billboard data={billboard} />
            </div>
        </Container>
    );
}

export default HomePage;