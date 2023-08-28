import {
  AdvantagesStyles,
  AdvantagesSpan,
  AdvantagesContainer,
  AdvantagesCard,
  CardImg,
  ImgContainer,
  CardTitle,
  CardText,
  AdvantagesTop,
} from "./Advantages.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const Advantages = () => {
  return (
    <section>
      <div className="container">
        <AdvantagesStyles>
          <AdvantagesTop>
            <AdvantagesSpan>
              Supercharge
            </AdvantagesSpan>
            <SectionTitle title={'Your Business'} />
          </AdvantagesTop>

          <AdvantagesContainer>
            <AdvantagesCard>
              <ImgContainer>
                <CardImg src="/" alt="icon-1" />
              </ImgContainer>

              <CardTitle>Efficiency Boost</CardTitle>

              <CardText>
                Revolutionize workflows by automating intricate tasks, paving the way for unparalleled time and energy savings.
              </CardText>
            </AdvantagesCard>

            <AdvantagesCard>
              <ImgContainer>
                <CardImg src="/" alt="icon-2" />
              </ImgContainer>

              <CardTitle>Customer Delight</CardTitle>

              <CardText>
                Elevate customer interactions with personalized, prompt responses, cultivating enduring satisfaction and loyalty.
              </CardText>
            </AdvantagesCard>

            <AdvantagesCard>
              <ImgContainer>
                <CardImg src="/" alt="icon-3" />
              </ImgContainer>

              <CardTitle>Time Saver</CardTitle>

              <CardText>
                Get back precious hours by effortlessly entrusting routine tasks to your tireless AI assistant, unlocking a surge in productivity.
              </CardText>
            </AdvantagesCard>
          </AdvantagesContainer>
        </AdvantagesStyles>
      </div>
    </section>
  );
};
