import { useLocation } from "react-router";
import FullContacts from "../FullContacts/FullContacts";
import MainCardArticle from "../MainCardArticle/MainCardArticle";
import PostedDate from "../PostedDate/PostedDate";
import SectionTitle from "../SectionTitle/SectionTitle";
import SaveTo from "../SaveTo/SaveTo";
import {
  TextBlock,
  PicturesWrapper,
  Img,
  IconWrapper,
  Article,
  CostsBlock,
  Description,
  Paraghraf,
  BlueRectangle,
  OrangeRectangle,
  SubParaghraf,
} from "./JobInfoItem.styled";
import { useWindowWidth } from "@react-hook/window-size";
import ApplyButton from "../ApplyButton/ApplyButton";
import BackButton from "../BackButton/BackButton";

const JobInfoItem = () => {
  const location = useLocation();
  const currentWidth = useWindowWidth();
  const {
    title,
    description,
    updatedAt,
    pictures,
    salary,
    employment_type,
    benefits,
  } = location.state;

  const re = /k/gi;
  const newSalary = salary.replace(re, "000");

  return (
    <TextBlock>
      <SectionTitle title="Job Details" />
      <IconWrapper>
        <SaveTo title="Save to my list" icon="icon-Rectangle-31" />
        <SaveTo title="Share" icon="icon-Shape" />
      </IconWrapper>
      {currentWidth >= 1920 && <ApplyButton />}
      <Article>
        <MainCardArticle title={title} />
      </Article>
      <CostsBlock>
        <PostedDate updatedAt={updatedAt} />
        <p>
          Brutto, per year <br />
          <span>€ {newSalary}</span>
        </p>
      </CostsBlock>

      <Description>{description}</Description>
      <Paraghraf>Responsopilities</Paraghraf>

      <Description>{description}</Description>
      <Paraghraf>Compensation & Benefits:</Paraghraf>
      <Description>
        At WellStar, we all share common goals. That’s what makes us so
        successful – and such an integral part of our communities. We want the
        same things, for our organization, for our patients, and for our
        colleagues. As the most integrated healthcare provider in Georgia, this
        means we pride ourselves on investing in the communities that we serve.
        We continue to provide innovative care models, focused on improving
        quality and access to healthcare. Wellstar Medical Group, a
        physician-led multi-specialty group in Atlanta, Georgia, is currently
        recruiting for a BC/BE cardiothoracic surgeon to join their existing
        cardiovascular program. This is an opportunity to play a key role on a
        multidisciplinary team of cardiologists and surgeons. The ideal
        candidate will have five or more years of experience in cardiac surgery.
        This candidate should be facile with off-pump revascularization, complex
        aortic surgery, minimally invasive valve and valve repair, transcatheter
        valve replacement, surgical atrial fibrillation ablation, ventricular
        assist device placement, and extra corporeal membrane oxygenation.
        Wellstar is one of the largest integrated healthcare systems in the
        Southeast with 11 hospitals in Atlanta metro region. With two open heart
        programs at Kennestone Regional Medical Center and Atlanta Medical
        Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures
        per year. The cardiac service line is the only center in Georgia with
        the Joint Commission’s Comprehensive Cardiac Center certification. Our
        physicians enjoy a wide range of benefits, including: Very competitive
        compensation package with bbbbonuses Medical, Dental, and Vision
        Insurance Occurrence-based Malpractice Coverage Short-term and Long-term
        Disability Insurance Life insurance
      </Description>

      <ApplyButton />

      <SectionTitle title="Attached images" />
      <PicturesWrapper>
        {pictures.map((p, id) => (
          <Img src={p} alt="pictures" key={id} />
        ))}
      </PicturesWrapper>

      <SectionTitle title="Additional info" />
      <SubParaghraf>Employment type</SubParaghraf>
      {employment_type.map((e, id) => (
        <BlueRectangle key={id}>{e}</BlueRectangle>
      ))}

      <SubParaghraf>Benefits</SubParaghraf>
      {benefits.map((e, id) => (
        <OrangeRectangle key={id}>{e}</OrangeRectangle>
      ))}

      {currentWidth < 1920 && <SectionTitle title="Contacts" />}
      <BackButton />
      <FullContacts data={location.state} />
    </TextBlock>
  );
};

export default JobInfoItem;
