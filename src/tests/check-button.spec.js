import { CheckButton } from "../components/check-button.js"
describe("creates a check-button with check favicon", () => {
  describe("creates check button", () => {
    const actual = CheckButton();
    it("is as button", () => {
      expect(actual.nodeName).toEqual("BUTTON");
    });
    it('has "fas fa-check" favicon', () => {
      // eslint-disable-next-line prettier/prettier
      expect(actual.innerHTML).toEqual("<i class=\"fas fa-check\"></i>");
    });
    it('has class "check-btn"', () => {
      expect(actual.className).toEqual("check-btn");
    });
    it('has childElementCount: 1', () => {
      expect(actual.childElementCount).toEqual(1);
    });
  });
});
