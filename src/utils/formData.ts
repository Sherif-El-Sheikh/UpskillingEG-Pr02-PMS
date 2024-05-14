type AppendFormData = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>,
) => FormData

export const appendFormData: AppendFormData = (data) => {
  const formData = new FormData()
  for (const key in data) {
    if (data[key]) {
      key === 'profileImage'
        ? formData.append(key, data[key][0])
        : formData.append(key, data[key])
    }
  }
  return formData
}
