import { TasksStats, UserStats } from '../types/interfaces'

interface usePieChartDataProps {
  TasksData: TasksStats
  UsersData: UserStats
}

const usePieChartData = ({ TasksData, UsersData }: usePieChartDataProps) => {
  const tasksPieChartData = {
    labels: ['To do', 'In Progress', 'Completed'],
    datasets: [
      {
        label: 'Tasks',
        data: [TasksData.toDo, TasksData.inProgress, TasksData.done],
        backgroundColor: ['#CFD1EC', '#E4E4BC', '#E7C3D7'],
        hoverOffset: 4,
      },
    ],
  }

  const usersPieChartData = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        label: 'Users',
        data: [
          UsersData.activatedEmployeeCount,
          UsersData.deactivatedEmployeeCount,
        ],
        backgroundColor: ['#CFD1EC', '#E4E4BC'],
        hoverOffset: 4,
      },
    ],
  }

  return {
    tasksPieChartData,
    usersPieChartData,
  }
}

export default usePieChartData
