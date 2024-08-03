import { useCallback } from "react";
import { Button } from "@mui/material";
import "./Aside.css";

const Aside = ({ className = "" }) => {
  const onLinkSVGClick = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/index.html");
  }, []);

  const onLinkContainerClick = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/FBA-Reimbursement.html");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/FBA-fulfillment.html");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/ledger-detail.html");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/FBA-inventory.html");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open(
      "file:///D:/Recotail%20Admin/html/FBA-fulfillment-inbound.html"
    );
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open(
      "file:///D:/Recotail%20Admin/html/FBA-fulfillment-removal-shipment.html"
    );
  }, []);

  const onLinkContainerClick6 = useCallback(() => {
    window.open(
      "file:///D:/Recotail%20Admin/html/FBA-fulfillment-removal-order.html"
    );
  }, []);

  const onLinkContainerClick7 = useCallback(() => {
    window.open(
      "file:///D:/Recotail%20Admin/html/FBA-lost-damaged-customer-returns.html"
    );
  }, []);

  const onLinkContainerClick8 = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/FBA-inbound-shipment.html");
  }, []);

  const onLinkContainerClick9 = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/FBA-removals.html");
  }, []);

  const onLinkContainerClick10 = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/FBA-weight-dimensions.html");
  }, []);

  const onLinkContainerClick11 = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/payment.html");
  }, []);

  const onLinkContainerClick12 = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/billing.html");
  }, []);

  const onLinkContainerClick13 = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/cards-basic.html");
  }, []);

  const onLinkContainerClick14 = useCallback(() => {
    window.open("file:///D:/Recotail%20Admin/html/icons-boxicons.html");
  }, []);

  return (
    <div className={`aside ${className}`}>
      <div className="main1">
        <div className="margin">
          <div className="container2">
            <img
              className="link-svg"
              loading="lazy"
              alt=""
              src="/link--svg.svg"
              onClick={onLinkSVGClick}
            />
          </div>
        </div>
        <div className="link-parent">
          <div className="link" onClick={onLinkSVGClick}>
            <img className="home-icon" alt="" src="/home.svg" />
            <div className="dashboard-wrapper">
              <a className="dashboard">Dashboard</a>
            </div>
          </div>
          <div className="background-parent">
            <div className="background" />
            <div className="itemmargin">
              <div className="item">
                <div className="link1" onClick={onLinkContainerClick}>
                  <div className="margin1">
                    <img
                      className="fba-reimb-icon"
                      alt=""
                      src="/fba-reimb.svg"
                    />
                  </div>
                  <div className="container3">
                    <div className="fba-reimbursement">FBA Reimbursement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="itemmargin1">
        <div className="item1">
          <div className="link2" onClick={onLinkContainerClick1}>
            <div className="margin1">
              <img
                className="fba-reimb-icon"
                loading="lazy"
                alt=""
                src="/fba-reimb.svg"
              />
            </div>
            <div className="container3">
              <div className="fba-fulfillment">FBA Fulfillment</div>
            </div>
          </div>
        </div>
      </div>
      <div className="itemmargin-parent">
        <div className="itemmargin2">
          <div className="item1">
            <div className="link3" onClick={onLinkContainerClick2}>
              <div className="margin1">
                <img
                  className="fba-reimb-icon"
                  loading="lazy"
                  alt=""
                  src="/fba-reimb.svg"
                />
              </div>
              <div className="container3">
                <div className="ledger-detail">Ledger Detail</div>
              </div>
            </div>
          </div>
        </div>
        <div className="itemmargin3">
          <div className="item1">
            <div className="link4" onClick={onLinkContainerClick3}>
              <div className="margin1">
                <img
                  className="fba-reimb-icon"
                  loading="lazy"
                  alt=""
                  src="/fba-reimb.svg"
                />
              </div>
              <div className="container3">
                <div className="fba-inventory">FBA Inventory</div>
              </div>
            </div>
          </div>
        </div>
        <div className="itemmargin4">
          <div className="item1">
            <div className="link5" onClick={onLinkContainerClick4}>
              <div className="margin1">
                <img
                  className="fba-reimb-icon"
                  loading="lazy"
                  alt=""
                  src="/fba-reimb.svg"
                />
              </div>
              <div className="container3">
                <div className="fba-fulfillment-inbound">
                  FBA Fulfillment Inbound
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="itemmargin-group">
        <div className="itemmargin5">
          <div className="item">
            <div className="link6" onClick={onLinkContainerClick5}>
              <div className="margin1">
                <img
                  className="fba-reimb-icon"
                  loading="lazy"
                  alt=""
                  src="/fba-reimb.svg"
                />
              </div>
              <div className="container8">
                <div className="fba-fulfillment-inbound">
                  <p className="fba-fulfillment-removal">
                    FBA Fulfillment Removal
                  </p>
                  <p className="fba-fulfillment-removal">Shipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="itemmargin6">
          <div className="item">
            <div className="link6" onClick={onLinkContainerClick6}>
              <div className="margin1">
                <img
                  className="fba-reimb-icon"
                  loading="lazy"
                  alt=""
                  src="/fba-reimb.svg"
                />
              </div>
              <div className="container8">
                <div className="fba-fulfillment-inbound">
                  <p className="fba-fulfillment-removal">
                    FBA Fulfillment Removal
                  </p>
                  <p className="fba-fulfillment-removal">Order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="itemmargin7">
          <div className="item">
            <div className="link6" onClick={onLinkContainerClick7}>
              <div className="margin1">
                <img
                  className="fba-reimb-icon"
                  loading="lazy"
                  alt=""
                  src="/fba-reimb.svg"
                />
              </div>
              <div className="container8">
                <div className="fba-fulfillment-inbound">
                  <p className="fba-fulfillment-removal">{`FBA Lost and Damaged &`}</p>
                  <p className="fba-fulfillment-removal">Customer Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="itemmargin8">
          <div className="item1">
            <div className="link9" onClick={onLinkContainerClick8}>
              <div className="margin1">
                <img
                  className="fba-reimb-icon"
                  loading="lazy"
                  alt=""
                  src="/fba-reimb.svg"
                />
              </div>
              <div className="container3">
                <div className="fba-inbound-shipments">
                  FBA Inbound Shipments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="itemmargin9">
        <div className="item1">
          <div className="link10" onClick={onLinkContainerClick9}>
            <div className="margin1">
              <img
                className="fba-reimb-icon"
                loading="lazy"
                alt=""
                src="/fba-reimb.svg"
              />
            </div>
            <div className="container3">
              <div className="fba-removals">FBA Removals</div>
            </div>
          </div>
        </div>
      </div>
      <div className="itemmargin10">
        <div className="item1">
          <div className="link11" onClick={onLinkContainerClick10}>
            <div className="margin1">
              <img
                className="fba-reimb-icon"
                loading="lazy"
                alt=""
                src="/fba-reimb.svg"
              />
            </div>
            <div className="container3">
              <div className="fba-inbound-shipments">FBA Weight Dimensions</div>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="itemmargin11"
        startIcon={<img width="20px" height="20px" src="/add.svg" />}
        disableElevation
        variant="text"
        sx={{
          textTransform: "none",
          color: "#193a54",
          fontSize: "12",
          borderRadius: "0px 0px 0px 0px",
          width: 260,
          height: 42,
        }}
      >
        Add Store
      </Button>
      <div className="itemmargin12">
        <div className="item">
          <div className="link1" onClick={onLinkContainerClick11}>
            <div className="margin1">
              <img
                className="fba-reimb-icon"
                loading="lazy"
                alt=""
                src="/payment.svg"
              />
            </div>
            <div className="container3">
              <div className="payment">Payment</div>
            </div>
          </div>
        </div>
      </div>
      <div className="itemmargin13">
        <div className="item">
          <div className="link1" onClick={onLinkContainerClick12}>
            <div className="margin1">
              <img
                className="fba-reimb-icon"
                loading="lazy"
                alt=""
                src="/billing.svg"
              />
            </div>
            <div className="container3">
              <div className="billing">Billing</div>
            </div>
          </div>
        </div>
      </div>
      <div className="itemmargin14">
        <div className="item">
          <div className="link14">
            <div className="margin14">
              <div className="symbol1"></div>
            </div>
            <div className="container16">
              <div className="fba-fulfillment-inbound">Layouts</div>
            </div>
            <div className="border" />
          </div>
        </div>
      </div>
      <div className="itemmargin15">
        <div className="item14">
          <div className="pages">Pages</div>
          <div className="horizontal-divider" />
        </div>
      </div>
      <div className="itemmargin16">
        <div className="item">
          <div className="link14">
            <div className="margin14">
              <div className="symbol1"></div>
            </div>
            <div className="container16">
              <div className="fba-fulfillment-inbound">Account Settings</div>
            </div>
            <div className="border" />
          </div>
        </div>
      </div>
      <div className="itemmargin17">
        <div className="item">
          <div className="link14">
            <div className="margin14">
              <div className="symbol1"></div>
            </div>
            <div className="container16">
              <div className="fba-fulfillment-inbound">Authentications</div>
            </div>
            <div className="border" />
          </div>
        </div>
      </div>
      <div className="itemmargin18">
        <div className="item">
          <div className="link14">
            <div className="margin14">
              <div className="symbol1"></div>
            </div>
            <div className="container16">
              <div className="fba-fulfillment-inbound">Misc</div>
            </div>
            <div className="border" />
          </div>
        </div>
      </div>
      <div className="itemmargin19">
        <div className="item14">
          <div className="pages">Components</div>
          <div className="horizontal-divider" />
        </div>
      </div>
      <div className="itemmargin20">
        <div className="item">
          <div className="link6" onClick={onLinkContainerClick13}>
            <div className="margin18">
              <div className="symbol1"></div>
            </div>
            <div className="container20">
              <div className="fba-fulfillment-inbound">Cards</div>
            </div>
          </div>
        </div>
      </div>
      <div className="itemmargin21">
        <div className="item">
          <div className="link14">
            <div className="margin14">
              <div className="symbol1"></div>
            </div>
            <div className="container16">
              <div className="fba-fulfillment-inbound">User interface</div>
            </div>
            <div className="border" />
          </div>
        </div>
      </div>
      <div className="itemmargin22">
        <div className="item">
          <div className="link14">
            <div className="margin14">
              <div className="symbol1"></div>
            </div>
            <div className="container16">
              <div className="fba-fulfillment-inbound">Extended UI</div>
            </div>
            <div className="border" />
          </div>
        </div>
      </div>
      <div className="itemmargin23">
        <div className="item">
          <div className="link6" onClick={onLinkContainerClick14}>
            <div className="margin18">
              <div className="symbol1"></div>
            </div>
            <div className="container20">
              <div className="fba-fulfillment-inbound">Boxicons</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aside;
