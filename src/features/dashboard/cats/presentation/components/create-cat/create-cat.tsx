import { useGetTags } from '../../hooks/use-get-tags'
import { useCreateCatForm } from './hooks/use-create-cat'
import type { ICreateCatPayload } from '../../../core/domain/cats.types'

export const CreateCat = () => {
  const { filter, onSubmit, setFilter, setText, text } = useCreateCatForm()

  const tagsQuery = useGetTags()

  // TODO: Add error handling, loading state, separate components for form sections.

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-center">Create a Cat!</h3>

      <form
        action={onSubmit}
        aria-describedby="create-cat-description"
        className="space-y-5"
      >
        <p
          id="create-cat-description"
          className="text-sm text-neutral-600 dark:text-neutral-400"
        >
          Fill out the form below to generate a customized cat image.
        </p>

        <div className="flex flex-col gap-1">
          <label htmlFor="cat-text" className="font-medium">
            Cat Text
          </label>
          <input
            id="cat-text"
            type="text"
            name="text"
            placeholder="Say something..."
            onChange={(e) => setText(e.target.value)}
            className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="tags" className="font-medium">
            Tags
          </label>

          <select
            id="tags"
            name="tags"
            multiple
            className="h-32 px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {tagsQuery.data?.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          <span className="text-xs text-neutral-500">
            Hold Ctrl/Command to select multiple
          </span>
        </div>

        {text.length > 0 && (
          <fieldset className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-4">
            <legend className="px-1 text-sm font-semibold">Font Options</legend>

            <div className="flex flex-col gap-1 mt-2">
              <label htmlFor="font-size" className="font-medium">
                Font Size
              </label>
              <input
                id="font-size"
                type="number"
                name="fontSize"
                placeholder="e.g. 24"
                min={1}
                className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <label htmlFor="font-color" className="font-medium">
                Font Color
              </label>
              <input
                id="font-color"
                type="text"
                name="fontColor"
                placeholder="e.g. #ff9900 or red"
                className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </fieldset>
        )}

        <div className="flex flex-col gap-1">
          <label htmlFor="filter-select" className="font-medium">
            Filter
          </label>
          <select
            id="filter-select"
            name="filter"
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value as ICreateCatPayload['filter'])
            }
            className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">None</option>
            <option value="mono">Mono</option>
            <option value="negate">Negate</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        {filter === 'custom' && (
          <fieldset className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-4">
            <legend className="px-1 text-sm font-semibold">
              Custom Filter Settings
            </legend>

            <div className="flex flex-col gap-1 mt-2">
              <label htmlFor="brightness" className="font-medium">
                Brightness
              </label>
              <input
                id="brightness"
                type="number"
                name="brightness"
                placeholder="0-100"
                min={0}
                max={100}
                required
                className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <label htmlFor="lightness" className="font-medium">
                Lightness
              </label>
              <input
                id="lightness"
                type="number"
                name="lightness"
                placeholder="0-100"
                min={0}
                max={100}
                required
                className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <label htmlFor="saturation" className="font-medium">
                Saturation
              </label>
              <input
                id="saturation"
                type="number"
                name="saturation"
                placeholder="0-100"
                min={0}
                max={100}
                required
                className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </fieldset>
        )}

        <button
          type="submit"
          className="w-full py-2.5 mt-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Create
        </button>
      </form>
    </div>
  )
}
