import type { UseFetchOptions } from "#app";
import { useApi } from "./use-api";

export function useSubmit<T = unknown>(request: string | Ref<string>, options: UseFetchOptions<T>) {
    const payload = ref();
    const { execute: submit, ...others } = useApi(request, {
        method: "POST",
        immediate: false,
        watch: false,
        body: payload,
        ...options
    });

    function execute(newPayload: any) {
        payload.value = newPayload;
        return submit();
    }

    return { ...others, execute };
}
