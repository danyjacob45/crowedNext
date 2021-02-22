import React from "react";

function footer() {
  return (
    <footer className="newFooter py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4  col-12">
            <div className="row">
              <div className="col-6">
                <div>
                  <span>Legal</span>
                </div>

                <div>
                  <a target="_blank" href="/terms">
                    Terms and Conditions
                  </a>
                </div>
                <div>
                  <a target="_blank" href="/police">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a target="_blank" href="/risk">
                    Risk Disclaimer
                  </a>
                </div>
                <div>
                  <a target="_blank" href="/impressum">
                    Imprint
                  </a>
                </div>
              </div>

              <div className="col-6">
                <div>
                  <span>Useful Information</span>
                </div>
                <div>
                  <a target="_blank" href="/hostingPlans">
                    Hosting Plans
                  </a>
                </div>
                <div>
                  <a target="_blank" href="/affiliate">
                    Become an Affiliate
                  </a>
                </div>
                <div>
                  <a target="_blank" href="/ambassador">
                    Become an Ambassador
                  </a>
                </div>

                <div>
                  <a target="_blank" href="/faq">
                    FAQ’s
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-md-0   col-6 text-center d-flex align-items-center justify-content-center">
            <a
              className="px-2 d-inline-bock"
              href="https://www.facebook.com/groups/340100750743245"
              target="_blank"
            >
              <svg
                width="23"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-facebook fa-w-16 fa-2x"
              >
                <path
                  fill="#6b6b6b"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  class=""
                ></path>
              </svg>
            </a>

            {/* <a
                className="px-2 d-inline-bock "
                href="https://t.me/crowdgrowing"
                target="_blank"
              >
                <img width="23" src="/assets/svges/inst.svg" />
              </a> */}
            <a
              className="px-2 d-inline-bock"
              href="https://t.me/crowdgrowing"
              target="_blank"
            >
              <img width="23" src="/assets/svges/twt.svg" />
            </a>
            <a
              className="px-2 d-inline-bock"
              href="https://www.youtube.com/channel/UCFXf8dvgTlnrfE23eTblBkQ?"
              target="_blank"
            >
              <img width="23" src="/assets/svges/yout.svg" />
            </a>
          </div>
          <div className=" col-6 mt-4 mt-md-0 col-md-4 text-right d-flex align-items-center justify-content-end">
            <img height="60" src="/assets/svges/logoGrey.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
