import { Flex, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import useWebSocket from "react-use-websocket";

export const CurrencyExchange: React.FC = () => {
  const socketUrl = "ws://stream.tradingeconomics.com/?client=guest:guest";
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl, {
    onOpen: () => sendJsonMessage({ topic: "subscribe", to: "EURUSD:CUR" }),

    shouldReconnect: (closeEvent) => true,
  });

  // const connectionStatus = {
  //   [ReadyState.CONNECTING]: "Connecting",
  //   [ReadyState.OPEN]: "Open",
  //   [ReadyState.CLOSING]: "Closing",
  //   [ReadyState.CLOSED]: "Closed",
  //   [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  // }[readyState];

  const parseData = (data: any) => {
    let neededData = null;
    if (data) {
      if (data.dt != null) {
        neededData = { timeStamp: new Date(data.dt), exchange: data.price };
      } else {
        return (neededData = null);
      }
    }
    return neededData;
  };

  const econData = parseData(lastJsonMessage);

  return (
    <Flex
      flexDirection="column"
      bg="brand.50"
      padding="0.4em"
      borderRadius="0.3em"
      minW="10em"
    >
      {econData === null ? (
        <Spinner size="xl" color="brand.600" alignSelf="center" />
      ) : (
        <>
          <Flex alignItems="center" justifyContent="center">
            <Text color="brand.700" fontSize="0.8em">
              {econData.timeStamp.toString()}
            </Text>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Text fontSize="0.8em">EUR/USD Exchange: </Text>
            <Text fontWeight="bold" color="brand.700">
              {econData.exchange}
            </Text>
          </Flex>
        </>
      )}
    </Flex>
  );
};
