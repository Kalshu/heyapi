// This file is auto-generated by @hey-api/openapi-ts

export const $AuditPointModel = {
  required: ["at", "by"],
  type: "object",
  properties: {
    by: {
      type: "string",
      format: "uuid",
    },
    at: {
      type: "string",
      format: "date-time",
    },
  },
  additionalProperties: false,
} as const;

export const $StoreInfo = {
  required: ["storeId", "teamId"],
  type: "object",
  properties: {
    teamId: {
      type: "string",
      format: "uuid",
    },
    storeId: {
      type: "string",
    },
  },
  additionalProperties: false,
} as const;

export const $CompanyArticleStoreInfoModel = {
  required: ["storeId", "teamId"],
  type: "object",
  properties: {
    storeId: {
      type: "string",
    },
    teamId: {
      type: "string",
      format: "uuid",
    },
  },
  additionalProperties: false,
} as const;

export const $CompanyArticleInformationsModel = {
  required: ["created", "displayName", "isDeployed", "isHome", "lastModified"],
  type: "object",
  properties: {
    displayName: {
      type: "string",
    },
    isDeployed: {
      type: "boolean",
    },
    isHome: {
      type: "boolean",
    },
    created: {
      $ref: "#/components/schemas/AuditPointModel",
    },
    lastModified: {
      $ref: "#/components/schemas/AuditPointModel",
    },
  },
  additionalProperties: false,
} as const;

export const $CompanyArticleModel = {
  required: ["storeInfo", "id", "infos"],
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "uuid",
    },
    infos: {
      $ref: "#/components/schemas/CompanyArticleInformationsModel",
    },
    storeInfo: {
      type: "array",
      items: {
        $ref: "#/components/schemas/CompanyArticleStoreInfoModel",
      },
    },
  },
  additionalProperties: false,
} as const;

export const $Configuration = {
  required: ["appName", "appPath", "clientId", "iconId", "id", "primaryColor"],
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "uuid",
    },
    clientId: {
      type: "string",
      format: "uuid",
    },
    iconId: {
      type: "string",
      format: "uuid",
    },
    appPath: {
      type: "string",
    },
    appName: {
      type: "string",
    },
    primaryColor: {
      type: "string",
    },
  },
  additionalProperties: false,
} as const;

export const $Contributor = {
  type: "object",
  properties: {
    memberId: {
      type: "string",
      format: "uuid",
    },
    type: {
      $ref: "#/components/schemas/MemberType",
    },
  },
  additionalProperties: false,
} as const;

export const $MemberType = {
  enum: ["user", "group"],
  type: "string",
} as const;

export const $PersonalArticleInformationsModel = {
  required: ["created", "displayName", "lastModified"],
  type: "object",
  properties: {
    displayName: {
      type: "string",
    },
    created: {
      $ref: "#/components/schemas/AuditPointModel",
    },
    lastModified: {
      $ref: "#/components/schemas/AuditPointModel",
    },
  },
  additionalProperties: false,
} as const;

export const $PersonalArticleModel = {
  required: ["id", "infos", "isEditable", "isHome", "isPersonal", "widgets"],
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "uuid",
    },
    isPersonal: {
      type: "boolean",
    },
    isEditable: {
      type: "boolean",
    },
    isHome: {
      type: "boolean",
    },
    infos: {
      $ref: "#/components/schemas/PersonalArticleInformationsModel",
    },
  },
  additionalProperties: false,
} as const;
