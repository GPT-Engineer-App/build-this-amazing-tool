import { Container, Table, Thead, Tbody, Tr, Th, Td, Text, VStack } from "@chakra-ui/react";

const data = [
  { browser: "Chrome", visitors: "3.4k", percentage: "63.9%" },
  { browser: "Safari", visitors: "1k", percentage: "19.4%" },
  { browser: "Microsoft Edge", visitors: "376", percentage: "7%" },
  { browser: "Firefox", visitors: "266", percentage: "4.9%" },
  { browser: "Mobile App", visitors: "118", percentage: "2.2%" },
  { browser: "Opera", visitors: "49", percentage: "0.9%" },
  { browser: "Yandex Browser", visitors: "44", percentage: "0.8%" },
  { browser: "Samsung Browser", visitors: "31", percentage: "0.6%" },
  { browser: "MIUI Browser", visitors: "3", percentage: "0.1%" },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Devices</Text>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th>Browser</Th>
              <Th>Visitors</Th>
              <Th isNumeric>%</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row, index) => (
              <Tr key={index}>
                <Td>{row.browser}</Td>
                <Td>{row.visitors}</Td>
                <Td isNumeric>{row.percentage}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;