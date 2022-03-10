import CircuitBreaker from 'opossum';

export declare enum HttpClient {
    FETCH = 'fetch',
    XHR = 'xhr',
    NODE = 'node',
    AXIOS = 'axios',
    GOT = 'got',
}

export type Options = {
    input: string | Record<string, any>;
    output: string;
    httpClient?: HttpClient;
    useOptions?: boolean;
    useUnionTypes?: boolean;
    exportCore?: boolean;
    exportServices?: boolean;
    exportModels?: boolean;
    exportSchemas?: boolean;
    request?: string;
    write?: boolean;
    circuitBreaker?: CircuitBreaker.Options;
};

export declare function generate(options: Options): Promise<void>;
