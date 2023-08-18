import HomeBanner from "@/components/HomePage/Banner/HomeBanner";
import Blog from "@/components/HomePage/Blog/Blog";
import FeaturedJobs from "@/components/HomePage/FeaturedJobs/FeaturedJobs";
import JobCategories from "@/components/HomePage/JobCategories/JobCategories";
import JobSeekers from "@/components/HomePage/JobSeekers/JobSeekers";
import JobsBanner from "@/components/HomePage/JobsBanner/JobsBanner";
import SponsorShip from "@/components/HomePage/SponsorShip/SponsorShip";
import Image from "next/image";
import TestimonialSection from "@/components/HomePage/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <HomeBanner></HomeBanner>

      {/* Popular job category section */}
      <JobCategories></JobCategories>

      {/* feature job section */}
      <FeaturedJobs></FeaturedJobs>

      {/* Seeker Post Section */}
      <JobSeekers></JobSeekers>

      {/* Jobs Banner section */}
      <JobsBanner></JobsBanner>

       {/*SponsorShip section */}
      <SponsorShip></SponsorShip>

       {/* Jobs Blog section */}
       <Blog></Blog>
      {/* Testimonial section */}
      <TestimonialSection></TestimonialSection>
    </div>
  );
}
