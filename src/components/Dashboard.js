
import React from 'react';
import { VStack, Box, Text, HStack } from '@chakra-ui/react';  
import { Bar, Line } from 'react-chartjs-2';

const Dashboard = () => {
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Profit',
        data: [30, 50, 10, 80, 20],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <VStack align="start" spacing="4">
      <HStack spacing="4">
        <Box p="4" boxShadow="lg" bg="white" rounded="md">
          <Text fontSize="xl" fontWeight="bold">
            All Students
          </Text>
        </Box>
        <Box p="4" boxShadow="lg" bg="white" rounded="md">
          <Text fontSize="xl" fontWeight="bold">
            All Courses
          </Text>
        </Box>
        <Box p="4" boxShadow="lg" bg="white" rounded="md">
          <Text fontSize="xl" fontWeight="bold">
            Total Attendance
          </Text>
        </Box>
      </HStack>

      <HStack spacing="4">
        <Box flex="1" p="4" boxShadow="lg" bg="white" rounded="md">
          <Text fontSize="xl" fontWeight="bold">
            Sales Chart
          </Text>
          <Bar data={barChartData} />
        </Box>
        <Box flex="1" p="4" boxShadow="lg" bg="white" rounded="md">
          <Text fontSize="xl" fontWeight="bold">
            Profit Trend
          </Text>
          <Line data={lineChartData} />
        </Box>
      </HStack>
    </VStack>
  );
};

export default Dashboard;
