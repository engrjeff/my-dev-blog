import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputWithFloatingLabel = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, ...props }, ref) => {
    return (
      <div className="flex-1">
        <div className="relative w-full flex-1">
          <input
            type={type}
            data-hasplaceholder={props.placeholder ? true : undefined}
            className="aria-[invalid=true]:border-red-500 h-[54px] focus:aria-[invalid=true]:ring-red-500 block px-2.5 py-3 w-full text-sm bg-transparent border border-gray-700 appearance-none focus:outline-none focus:ring-1 focus:ring-primary peer placeholder:text-gray-700 placeholder:invisible data-[hasplaceholder=true]:focus:placeholder:visible disabled:bg-disabled-100 disabled:cursor-not-allowed disabled:text-uidisabled"
            placeholder={props.placeholder ?? label}
            {...props}
            ref={ref}
            aria-invalid={error ? true : undefined}
            aria-describedby={`${props.id}_error`}
          />
          <label
            htmlFor={props.id}
            className="pointer-events-none select-none absolute cursor-text *:hidden text-sm text-gray-700 duration-300 px-1.5 -translate-y-5 scale-75 bg-background left-1 top-2 z-[5] origin-[0] peer-focus:px-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:*:inline peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-white peer-focus:bg-background peer-focus:*:hidden rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            {label}
          </label>
        </div>
        {error ? (
          <em
            className="not-italic text-red-500 text-xs"
            id={`${props.id}_error`}
          >
            {error}
          </em>
        ) : null}
      </div>
    );
  }
);

InputWithFloatingLabel.displayName = 'InputWithFloatingLabel';

const InputWithFloatingLabelA = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, ...props }, ref) => {
    return (
      <div className="relative w-full flex-1">
        <input
          type={type}
          className="h-[54px] block px-2.5 py-3 w-full text-sm bg-transparent border border-gray-700 appearance-none focus:outline-none focus:ring-1 focus:ring-primary peer disabled:bg-disabled-100 disabled:cursor-not-allowed disabled:text-disabled-100"
          placeholder={props.placeholder ?? label}
          {...props}
          ref={ref}
        />
        <label
          htmlFor={props.id}
          className="pointer-events-none select-none absolute cursor-text text-sm text-gray-700 duration-300 px-1.5 bg-background left-1 top-1/2 -translate-y-1/2 z-[5]"
        >
          {label}
        </label>
      </div>
    );
  }
);

InputWithFloatingLabelA.displayName = 'InputWithFloatingLabelA';

const InputWithFloatingLabelB = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, ...props }, ref) => {
    return (
      <div className="relative w-full flex-1">
        <input
          type={type}
          className="h-[54px] block px-2.5 py-3 w-full text-sm bg-transparent border border-gray-700 appearance-none focus:outline-none focus:ring-1 focus:ring-primary peer disabled:bg-disabled-100 disabled:cursor-not-allowed disabled:text-disabled-100 peer placeholder:invisible"
          placeholder={props.placeholder ?? label}
          {...props}
          ref={ref}
        />
        <label
          htmlFor={props.id}
          className="pointer-events-none select-none absolute cursor-text text-sm text-gray-700 duration-300 px-1.5 bg-background left-1 top-1/2 -translate-y-1/2 z-[5] origin-[0] peer-focus:px-1.5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-white peer-focus:bg-background"
        >
          {label}
        </label>
      </div>
    );
  }
);

InputWithFloatingLabelB.displayName = 'InputWithFloatingLabelB';

const InputWithFloatingLabelC = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, ...props }, ref) => {
    return (
      <div className="flex-1">
        <div className="relative w-full flex-1">
          <input
            type={type}
            data-hasplaceholder={props.placeholder ? true : undefined}
            className="aria-[invalid=true]:border-red-500 focus:aria-[invalid=true]:ring-red-500 h-[54px] block px-2.5 py-3 w-full text-sm bg-transparent border border-gray-700 appearance-none focus:outline-none focus:ring-1 focus:ring-primary peer disabled:bg-disabled-100 disabled:cursor-not-allowed disabled:text-disabled-100 placeholder:text-gray-700 placeholder:invisible data-[hasplaceholder=true]:focus:placeholder:visible"
            placeholder={props.placeholder ?? label}
            aria-invalid={error ? true : undefined}
            aria-describedby={`${props.id}_error`}
            {...props}
            ref={ref}
          />
          <label
            htmlFor={props.id}
            className="pointer-events-none select-none absolute cursor-text *:hidden text-sm text-gray-700 duration-300 px-1.5 -translate-y-5 scale-75 bg-background left-1 top-2 z-[5] origin-[0] peer-focus:px-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:*:inline peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-white peer-focus:bg-background"
          >
            {label}
          </label>
        </div>
        {error ? (
          <em
            className="not-italic text-red-500 text-xs"
            id={`${props.id}_error`}
          >
            {error}
          </em>
        ) : null}
      </div>
    );
  }
);

InputWithFloatingLabelC.displayName = 'InputWithFloatingLabelC';

export {
  InputWithFloatingLabel,
  InputWithFloatingLabelA,
  InputWithFloatingLabelB,
  InputWithFloatingLabelC,
};
