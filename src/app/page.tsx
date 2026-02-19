import Banner from "@/Component/Home/Banner";
import Ourproducts from "@/Component/Home/Ourproducts";
import Testimonials from "@/Component/Home/Testimonial";
import WhyChooseUs from "@/Component/Home/Whychooseus";


export default function Home() {
  return (<>
   <Banner></Banner>
    <Ourproducts></Ourproducts>
    <WhyChooseUs></WhyChooseUs>
    <Testimonials></Testimonials>
    </>
  );
}
