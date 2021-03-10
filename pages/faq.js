import React from "react";
// import "./style.scss";
import Wrapper from "../components/pagesWrapper";
import classnames from "classnames";

const faqArray = [
  {
    question: "What does Crowd Growing do?",
    answer: () =>
      `With Crowd Growing  you have the opportunity to invest into the cannabis market without having any facilities, licenses nor knowledge by yourself. You simply invest into growing equipment which will be hosted then in one of our partner’s facilities and share the profits with you.         `,
  },
  {
    question: "What are the differences between the different products? ",
    answer: () => (
      <div>
        The starter, advanced & professional plan don’t differ in any form from
        profitability, only the founder plan will pay users 1 - 3% more per
        month. Depending which plan you purchase you will have different
        commission earning opportunities. <br />
        Starter: 5% direct commission / 1 - 2 level residual income bonus <br />
        Advanced: 6% direct commission / 1 – 4 level residual income bonus
        <br />
        Professional: 7% direct commission / 1 – 8 level residual income bonus
      </div>
    ),
  },
  {
    question:
      "What does the investment status mean exactly and can I upgrade a hosting plan? ",
    answer: () => (
      <div>
        It’s not possible to upgrade a hosting plan but for example if you buy
        multiple beginner plans and the total value reaches 1000$ or more,
        you’re investment status will automatically be upgraded to Advanced.
        That will give you the opportunity to benefit of higher earnings through
        our partner program.
      </div>
    ),
  },
  {
    question: "When will I receive my first profit share? ",
    answer: () => (
      <div>
        Profits are distributed every Friday 1 pm GMT. If you have invested
        before Friday 1 pm GMT, you will receive a profit in the following week.
        This gives us enough time to setup your growing equipment accordingly
        and start hosting it on time.
      </div>
    ),
  },
  {
    question: "What is a residual commission?        ",
    answer: () => (
      <div>
        A residual commission is paid to the affiliate who referred a customer
        and is qualified for the affiliate program. Through the residual
        commission you are earning a 10% commission every time one of your
        customers is receiving a profit share from his hosting plan.
      </div>
    ),
  },
  {
    question: "With what currencies I can do a deposit?         ",
    answer: () => (
      <div>
        We accept payments in Bitcoin (BTC), Ethereum (ETH) and Tether (USDT)
      </div>
    ),
  },
  {
    question: "With what currencies I can process a withdrawal?         ",
    answer: () => <div>Withdrawals are only processed in Bitcoin (BTC)</div>,
  },
  {
    question: "How long does it take until my withdrawal arrives?        ",
    answer: () => (
      <div>
        Withdrawals are processed once per day at 7 pm GMT. Please notice: You
        can only request one withdrawal per 24 hours.
      </div>
    ),
  },
  {
    question: "Is there a fee taken for withdrawals?        ",
    answer: () => (
      <div>
        Yes we are taking a withdrawal fee of 3%. This helps us to maintain the
        payment system as well as covering the money management fees in the
        background.
      </div>
    ),
  },
  {
    question:
      "Do I need to have purchased a product by myself in order to receive commissions?        ",
    answer: () => (
      <div>
        Yes you need to have at least a beginner plan in order to be qualified
        to earn commissions. <br />
        Please notice: You can already refer people without having purchased a
        product yet.
      </div>
    ),
  },
  {
    question: "Isn’t the cannabis business illegal?        ",
    answer: () => (
      <div>
        No it’s not, our partner facilities primarily grow CBD and CBG and are
        compliant to the respective regulations in each operating country.
      </div>
    ),
  },
  {
    question: "How long is my equipment hosted by Crowd Growing?        ",
    answer: () => <div>800 - 1000 days, depending on the hosting plan.</div>,
  },
  {
    question: "When do I get my initial investment back?        ",
    answer: () => (
      <div>
        After 800 - 1000 days you have the opportunity to renew your contract
        for 50% of the initial costs or request a withdrawal of 50% of your
        initial investment.
      </div>
    ),
  },
  {
    question: "I just made a deposit, when will it show in my account?        ",
    answer: () => (
      <div>
        After 1 confirmation the deposit will be automatically credited to your
        balance.
      </div>
    ),
  },
];

const Faq = () => {
  const [activeElement, setActiveElement] = React.useState(null);
  return (
    <Wrapper>
      <div className="pageContainer faq">
        <h3>FAQ</h3>
        <div className="container ">
          <div class="col-12">
            {faqArray.map((el, i) => {
              return (
                <div class="mb-3">
                  <div class="d-flex align-items-start bg-light p-4">
                    <div class="mr-3 text-white rounded-circle" />
                    <div class="w-100">
                      <div
                        onClick={() => setActiveElement(i)}
                        class="d-flex align-items-center justify-content-between"
                      >
                        <a
                          onClick={(e) => e.preventDefault()}
                          href="#"
                          class="text-dark"
                        >
                          <h4 class="mb-0"> {el.question} </h4>
                        </a>
                        <a href="#" class="text-dark" />
                      </div>
                      <p
                        className={classnames(
                          "text-secondary hiddenText mt-3",
                          {
                            active: i === activeElement,
                          }
                        )}
                      >
                        {el.answer()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Faq;
