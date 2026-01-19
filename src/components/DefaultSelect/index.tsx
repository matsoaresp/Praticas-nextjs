export type SelectOption = {
  value: 'RJ' | 'PR' | 'SP' | 'BA'
  text: string
}

type DefaultSelectProps = {
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
}

export default function DefaultSelect({
  value,
  options,
  onChange
}: DefaultSelectProps) {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Selecione um estado</option>

        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}
