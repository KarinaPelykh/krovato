import {
  ReviewsSection,
  AboutAsSection,
  KrovatoSection,
  InviteSection,
} from "../components";
import { OurServicesList } from "../components/our-advantages-section/OurServicesList";

export const AboutAsPage = () => {
  return (
    <>
      <AboutAsSection />
      <KrovatoSection />
      <ReviewsSection />
      <InviteSection />
      <OurServicesList />
    </>
  );
};
