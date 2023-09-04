import {
  AppStores,
  InfoContainer,
  LegalList,
  Rights,
  StoreImg,
  StoreTitle,
  StoreButtons,
  InfoBlock,
  RightsSpan,
} from "./Footer.styled";
import { Logo } from "../Logo/Logo.jsx";
import { ScrollButton } from "../ScrollButton/ScrollButton";

import Google_Play from "../../assets/images/Google_Play_light.svg";
import App_Store from "../../assets/images/App_Store_light.svg";
import { ToTopLink } from "../ToTopLink/ToTopLink";

export const Footer = () => {
  return (
    <>
      <footer>
        <InfoBlock>
          <div>
            <Logo />
            <InfoContainer>
              <LegalList>
                <li>
                  <ToTopLink to="/registration">Download Now</ToTopLink>
                </li>
                {/* <li>
                  <a href="#license">License</a>
                </li> */}
              </LegalList>

              <LegalList>
                <li>
                  <ToTopLink to="/">About</ToTopLink>
                </li>
                <li>
                  <ToTopLink to="/examples">Features</ToTopLink>
                </li>
                <li>
                  <ToTopLink to="/pricing">Pricing</ToTopLink>
                </li>
                {/* <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="#help">Help</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li> */}
              </LegalList>
            </InfoContainer>
          </div>
          <AppStores>
            <StoreTitle>Get the App</StoreTitle>

            <ul>
              <StoreButtons>
                <a href="/google" target="_blank">
                  <StoreImg src={Google_Play} alt="Google Play button" />
                </a>
              </StoreButtons>
              <StoreButtons>
                <a href="/apple" target="_blank">
                  <StoreImg src={App_Store} alt="Apple store button" />
                </a>
              </StoreButtons>
            </ul>
          </AppStores>
        </InfoBlock>

        <Rights>
          <RightsSpan>© 2023 All rights reserved.</RightsSpan>
          <ScrollButton />
        </Rights>
      </footer>
    </>
  );
};
