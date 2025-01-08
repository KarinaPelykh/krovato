import { useTranslation } from "react-i18next";
import { ServiceInformation } from "./ServiceSection.type";

type ServiceTableProps = {
  serviceInfo: ServiceInformation[];
};

export const ServiceTable = ({ serviceInfo }: ServiceTableProps) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "DeliveryPage.service-section",
  });

  return (
    <table className="hidden  mb-10 w-full desktop:flex desktop:flex-col">
      <thead className="bg-gray py-[17px] px-[31px] rounded-lg block ">
        <tr className="text-white  text-xl flex text-center justify-between">
          <th className="w-[460px]">{t("service")}</th>
          <th className="w-[160px]">{t("subtitle")}</th>
          <th>{t("subtitle_2")}</th>
        </tr>
      </thead>
      <tbody>
        {serviceInfo.map(
          ({ isFree, service, price }: ServiceInformation, i: number) => (
            <tr
              className="flex  gap-2.5 items-center p-[15px] flex-col desktop:flex-row odd:bg-white-light odd:rounded-lg text-base mt-2.5"
              key={i}
            >
              <td className="whitespace-nowrap desktop:min-w-[460px]">
                {service}
              </td>
              <td className="min-w-[70px] border-b border-dotted border-black"></td>
              <td className="whitespace-nowrap min-w-[160px] text-center">
                {isFree}
              </td>
              <td className="w-full border-b border-dotted border-black"></td>
              <td className="whitespace-nowrap">{price}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
