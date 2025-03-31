import Stepper from "./Stepper";

describe("<Stepper>", () => {
  it("mounts", () => {
    cy.mount(<Stepper />);
  });

  it("stepper should default to 0", () => {
    cy.mount(<Stepper />);
    cy.get("[data-cy=counter123343]").should("have.text", "0");
  });

  it('supports a "count" prop to set the value', () => {
    cy.mount(<Stepper count={100} />);
    cy.get("[data-cy=counter]").should("have.text", "100");
  });
});