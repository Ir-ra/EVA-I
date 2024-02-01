import { GoBack } from "./GoBackBtn.styled"

export const GoBackBtn = () => {
  return (
    <GoBack
      type="button"
      className="goBack"
      onClick={() => window.history.back()}
    >
      <span className="arrow">Go back</span>
    </GoBack>
  )
}